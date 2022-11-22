import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import {
  Icon,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

import Text from './Text';
import Avatar from './Avatar';
import VStack from './VStack';
import ProgressBar from './ProgressBar';

import dayjs from 'dayjs';
import numeral from 'numeral';
import { ProjectFragment, StatusProject_Enum } from 'sdk';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

interface ProjectItemProps {
  style?: ViewStyle;
  enabled?: boolean;
  item: ProjectFragment;
  onPress?(): void;
  onEdit?(): void;
  onDelete?(): void;
}

const ProjectItem: React.FC<ProjectItemProps> = React.memo(
  ({ style, item, onPress, onEdit, onDelete, enabled = false }) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const styles = useStyleSheet(themeStyles);
    const refSwipeable = React.useRef<Swipeable>(null);
    const {
      name,
      cost,
      start_date,
      status_id,
      end_date,
      budget,
      image_url,
      ProjectMembers,
    } = item;

    const formatDate = 'DD/MM/YYYY';
    const currentDate = dayjs();

    const diffCurrent = currentDate.diff(start_date, 'day');
    const diffEstDate = dayjs(end_date).diff(start_date, 'day') + 1;
    let value = 0;
    const ratio = Number(((diffCurrent / diffEstDate) * 100).toFixed(2));
    if (diffCurrent > 0) {
      value = ratio > 100 ? 100 : ratio;
    }

    const getColorStatus = () => {
      switch (status_id) {
        case StatusProject_Enum.Bidding:
          return theme['color-success-600'];
        case StatusProject_Enum.Done:
          return theme['color-info-500'];
        case StatusProject_Enum.Failed:
          return theme['color-red-500'];
        case StatusProject_Enum.InProgress:
          return theme['text-warning-color'];
        default:
          return theme['text-danger-color'];
      }
    };

    const renderProgress = React.useCallback(() => {
      return (
        <ProgressBar
          progress={value / 100}
          styleBar={styles.progressBar}
          style={styles.progressBar}
          progressColor={theme['text-warning-color']}
        />
      );
    }, [value, getColorStatus]);

    const renderRightActions = React.useCallback(() => {
      return (
        <VStack>
          <RectButton
            style={[
              styles.button,
              {
                backgroundColor: theme['text-warning-color'],
              },
            ]}
            onPress={() => {
              refSwipeable.current?.close();
              onEdit && onEdit();
            }}
          >
            <Icon pack="assets" name="edit" style={styles.icon} />
            <Text marginTop={4} category="s5" status="white">
              {t('edit')}
            </Text>
          </RectButton>
          <RectButton
            style={[
              styles.button,
              {
                backgroundColor: theme['text-danger-color'],
              },
            ]}
            onPress={() => {
              refSwipeable.current?.close();
              onDelete && onDelete();
            }}
          >
            <Icon pack="assets" name="trash" style={styles.icon} />
            <Text category="s5" status="white" marginTop={4}>
              {t('delete')}
            </Text>
          </RectButton>
        </VStack>
      );
    }, []);

    return (
      <Swipeable
        ref={refSwipeable}
        renderRightActions={renderRightActions}
        containerStyle={styles.container}
        overshootRight={false}
        enabled={enabled}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={[
            styles.item,
            {
              borderColor: theme['color-basic-300'],
            },
            style,
          ]}
          onPress={onPress}
        >
          <View style={styles.content}>
            <View style={styles.title}>
              <View style={styles.row}>
                <Avatar
                  src={image_url}
                  name={name}
                  size={32}
                  borderRadius={99}
                  style={styles.avatar}
                />
                <Text category="s5" status="basic" capitalize>
                  {name}
                </Text>
              </View>
              <Text
                status={'warning'}
                center
                category="c2"
                capitalize
                style={{ color: getColorStatus() }}
              >
                {status_id.replace('_', '')}
              </Text>
            </View>
            {renderProgress()}
            <View style={[styles.row, { marginTop: 12 }]}>
              <Text category="c1" status="primary">
                {dayjs(start_date).format(formatDate)}
              </Text>
              <Text category="c1" status="primary">
                {dayjs(end_date).format(formatDate)}
              </Text>
            </View>
            <View style={[styles.row, { marginTop: 12 }]}>
              <Text category="c1" status="primary">
                EST Cost:{' '}
                <Text category="c2" status="platinum">
                  ${numeral(cost || 0).format('0,0.00')}/
                </Text>
                ${numeral(budget || 0).format('0,0.00')}
              </Text>
              <View style={styles.row}>
                {ProjectMembers.length > 0 &&
                  ProjectMembers.map((_item, i) => {
                    return (
                      i < 4 && (
                        <Avatar
                          key={i}
                          size={24}
                          name={_item.Member.full_name || ''}
                          src={_item.Member.avatar_url}
                          style={styles.avatarMember}
                        />
                      )
                    );
                  })}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  },
);

export default ProjectItem;

const themeStyles = StyleService.create({
  container: {
    flex: 1,
    marginBottom: 16,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'flex-start',
    marginLeft: 16,
    backgroundColor: '#FFF',
  },
  avatar: {
    marginRight: 6,
    width: 32,
    height: 32,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  progressBar: {
    height: 8,
  },
  avatarMember: {
    borderRadius: 99,
    marginLeft: 4,
    width: 20,
    height: 20,
  },
  button: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -1,
    marginLeft: -12,
    paddingLeft: 32,
    zIndex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'text-white-color',
  },
});
