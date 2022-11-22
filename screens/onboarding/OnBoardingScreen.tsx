import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Pagination, Text } from 'components';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useTheme, Button, Layout } from '@ui-kitten/components';
import {
  useNavigation,
  CommonActions,
  NavigationProp,
} from '@react-navigation/native';
import { useSharedValue } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { useLayout } from 'hooks';

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { Images } from 'assets/images';
import { EKeyAsyncStorage } from 'constants/types';
import { RootStackParamList } from 'navigation/types';

const OnBoardingScreen = React.memo(() => {
  const theme = useTheme();
  const progress = useSharedValue(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const refText = React.useRef<ICarouselInstance>(null);
  const { height, width } = useLayout();
  const { t } = useTranslation(['common']);
  const { setItem } = useAsyncStorage(EKeyAsyncStorage.INTRO);
  const { dispatch } = useNavigation<NavigationProp<RootStackParamList>>();

  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  React.useEffect(() => {
    refText.current?.scrollTo({ animated: false, index: activeIndex });
    ref.current?.scrollTo({ animated: false, index: activeIndex });
  }, [activeIndex]);

  const nextScreen = React.useCallback(
    (screenName: keyof RootStackParamList) => {
      const resetAction = CommonActions.reset({
        index: 1,
        routes: [
          {
            name: screenName,
          },
        ],
      });
      dispatch(resetAction);
    },
    [],
  );

  const handleSignIn = React.useCallback(() => {
    setItem('1');
    nextScreen('Auth');
  }, []);

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Image source={Images.logo} style={styles.logo} />
        <Carousel
          data={data}
          width={width - 64}
          ref={ref}
          style={{ width: '100%' }}
          windowSize={width}
          height={240 * (height / 812)}
          snapEnabled
          enabled
          onSnapToItem={setActiveIndex}
          onProgressChange={(_, absoluteProgress) =>
            (progress.value = absoluteProgress)
          }
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={styles.item}>
                <Image source={item.image} style={styles.image} />
              </View>
            );
          }}
        />
        <View style={styles.pagination}>
          {data.map((item, i) => {
            return (
              <Pagination
                backgroundColor={theme['button-primary-color']}
                index={i}
                key={i}
                animValue={progress}
                length={data.length}
                size={6}
              />
            );
          })}
        </View>
        <Carousel
          data={data}
          width={width}
          ref={refText}
          onSnapToItem={setActiveIndex}
          style={{ width: '100%' }}
          windowSize={width}
          height={132 * (height / 812)}
          onProgressChange={(_, absoluteProgress) =>
            (progress.value = absoluteProgress)
          }
          renderItem={({ item }) => {
            return (
              <Text category="h1" marginHorizontal={32}>
                {item.title}
              </Text>
            );
          }}
        />
      </Content>
      <Layout style={styles.bottom}>
        <Button
          children={t('common:get_starter')}
          onPress={handleSignIn}
          status="info"
        />
        <TouchableOpacity onPress={handleSignIn}>
          <Text status="info" center marginVertical={20}>
            {t('common:skip')}
          </Text>
        </TouchableOpacity>
      </Layout>
    </Container>
  );
});

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {},
  image: {
    width: 240,
    height: 240,
  },
  logo: {
    width: 40,
    height: 40,
    margin: 20,
  },
  item: {
    marginHorizontal: 12,
    marginBottom: 32,
  },
  textField: {
    flexDirection: 'row',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 32,
  },
  bottom: {
    marginHorizontal: 32,
  },
});
const data = [
  { image: Images.analytics, title: 'Profit tracking of all your projects' },
  { image: Images.cash, title: 'Cash flow management of projects' },
  {
    image: Images.customer,
    title: 'Manage all the staff responsible for your job',
  },
];
