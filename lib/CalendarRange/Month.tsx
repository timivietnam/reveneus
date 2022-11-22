import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
// components
import Week from './Week';
// types
import { getWeeks, Month_Type, Week_Type } from 'utils/dataCalendarUtil';
import { LOCALE_TYPE } from 'utils/localeCalendarUtil';
import { Style } from './index';
import { Images } from 'assets/images';
import { Icons } from 'assets/icons';

interface Props {
  item: Month_Type;
  locale: LOCALE_TYPE;
  handlePress: (date: string) => void;
  startDate: string | null;
  endDate: string | null;
  isMonthFirst?: boolean;
  disabledBeforeToday?: boolean;
  style?: Style;
  handleNextMonth?(): void;
  handlePrevMonth?(): void;
}

const PADDING_HORIZONTAL = 16;
function Month({
  item,
  locale,
  handlePress,
  startDate,
  endDate,
  isMonthFirst,
  disabledBeforeToday,
  style,
  handleNextMonth,
  handlePrevMonth,
}: Props) {
  const { year, month } = item;

  const renderDayNames = () => {
    const result = [];
    const dayNames = locale.dayNames;

    for (let i = 0; i < dayNames.length; i++) {
      result.push(
        <View key={i} style={styles.dayNameContainer}>
          <Text style={[styles.dayName, style?.dayNameText]}>
            {dayNames[i]}
          </Text>
        </View>,
      );
    }
    return result;
  };

  const renderWeeks = () => {
    const result = [];
    const weeks: Week_Type[] = getWeeks(item.id, startDate, endDate);
    const is6Weeks = weeks.length > 5;

    for (let i = 0; i < weeks.length; i++) {
      result.push(
        <Week
          key={i}
          week={weeks[i]}
          locale={locale}
          handlePress={handlePress}
          is6Weeks={is6Weeks}
          disabledBeforeToday={disabledBeforeToday}
          style={style}
        />,
      );
    }
    return result;
  };

  return (
    <View style={[styles.monthContainer, style?.monthContainer]}>
      <View style={styles.monthNameContainer}>
        {/* <TouchableOpacity onPress={handlePrevMonth}>
          <Image source={Icons.arrow_left} style={{}}/>
        </TouchableOpacity> */}
        <Text style={[styles.monthName, style?.monthNameText]}>
          {isMonthFirst ? <Text>{locale.monthNames[month - 1]} </Text> : null}
          {year}
          {locale.year}
          {!isMonthFirst ? <Text> {locale.monthNames[month - 1]}</Text> : null}
        </Text>
        {/* <TouchableOpacity onPress={handleNextMonth}>
          <Image source={Icons.arrow_left} style={{transform:[{rotate:'180deg'}]}}/>
        </TouchableOpacity> */}
      </View>
      <View style={styles.dayNamesContainer}>{renderDayNames()}</View>
      {renderWeeks()}
    </View>
  );
}

function areEqual(prevProps: Props, nextProps: Props) {
  const newId = nextProps.item.id;
  if (
    nextProps.startDate &&
    moment(nextProps.startDate).format('YYYY-MM') === newId
  ) {
    return false;
  }

  if (
    nextProps.endDate &&
    moment(nextProps.endDate).format('YYYY-MM') === newId
  ) {
    return false;
  }

  if (
    prevProps.startDate &&
    moment(prevProps.startDate).format('YYYY-MM') === newId
  ) {
    return false;
  }

  if (
    prevProps.endDate &&
    moment(prevProps.endDate).format('YYYY-MM') === newId
  ) {
    return false;
  }

  if (
    nextProps.startDate &&
    nextProps.endDate &&
    moment(nextProps.startDate).format('YYYYMM') <
      moment(newId).format('YYYYMM') &&
    moment(nextProps.endDate).format('YYYYMM') > moment(newId).format('YYYYMM')
  ) {
    return false;
  }

  if (
    prevProps.endDate &&
    prevProps.startDate &&
    moment(prevProps.startDate).format('YYYYMM') <
      moment(newId).format('YYYYMM') &&
    moment(prevProps.endDate).format('YYYYMM') > moment(newId).format('YYYYMM')
  ) {
    return false;
  }

  if (
    prevProps.locale &&
    nextProps.locale &&
    prevProps.locale.today !== nextProps.locale.today
  ) {
    return false;
  }

  return true;
}

export default memo(Month, areEqual);

const styles = StyleSheet.create({
  monthContainer: {
    paddingTop: 16,
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: '#fff',
  },
  monthNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    marginBottom: 16,
  },
  monthName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dayNamesContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderBottomColor: '#C4CAD680',
  },
  dayName: {
    fontSize: 15,
    color: '#6F6C99',
  },
  dayContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
