import React, { useMemo, useCallback } from 'react';
import moment from 'moment';
import { FlatList, View, ActivityIndicator, Dimensions } from 'react-native';
import Month from './Month';
import { getMonths, Month_Type } from 'utils/dataCalendarUtil';
import { LOCALE_TYPE } from 'utils/localeCalendarUtil';
import { Style } from './index';
import { ViewToken } from 'react-native';
import dayjs from 'dayjs';

interface Props {
  pastYearRange: number;
  futureYearRange: number;
  initialNumToRender: number;
  locale: LOCALE_TYPE;
  handlePress: (date: string) => void;
  startDate: string | null;
  endDate: string | null;
  style?: Style;
  flatListProps?: any;
  isMonthFirst?: boolean;
  disabledBeforeToday?: boolean;
}

const LAYOUT_WIDTH = 370;
const width = Dimensions.get('screen').width;
const CalendarList = ({
  pastYearRange,
  futureYearRange,
  initialNumToRender,
  locale,
  handlePress,
  startDate,
  endDate,
  flatListProps,
  isMonthFirst,
  disabledBeforeToday,
  style,
}: Props) => {
  const months: Month_Type[] = useMemo(
    () => getMonths(pastYearRange, futureYearRange),
    [pastYearRange, futureYearRange],
  );

  const getInitialIndex = () => {
    const x = months.findIndex((month: Month_Type) => {
      const targetDate = startDate ? moment(startDate) : moment();
      return month.id === targetDate.format('YYYY-MM');
    });
    return x;
  };
  // const [currentDate, setCurrenDate] = React.useState(dayjs(new Date()));
  // const [currentIndex, setCurrentIndex] = React.useState<number>();
  // getInitialIndex(),
  // months.length*
  const ref = React.useRef<FlatList>(null);

  // const handlePrevMonth = React.useCallback(() => {
  //   // setCurrenDate(dayjs(currentDate).add(-1, 'month'));
  // }, [currentDate]);

  // const handleNextMonth = React.useCallback(() => {
  //   // setCurrenDate(dayjs(currentDate).add(1, 'month'));
  // }, [currentDate]);

  // React.useEffect(() => {
  //   // ref.current?.scrollToOffset({ offset: });
  // }, [currentIndex]);

  const handleRenderItem = useCallback(
    ({ item }: { item: Month_Type }) => (
      <View
        style={{
          // height: LAYOUT_HEIGHT,
          width: width,
          backgroundColor: '#fff',
        }}
      >
        <Month
          item={item}
          locale={locale}
          handlePress={handlePress}
          startDate={startDate}
          endDate={endDate}
          isMonthFirst={isMonthFirst}
          disabledBeforeToday={disabledBeforeToday}
          style={style}
          // handleNextMonth={handleNextMonth}
          // handlePrevMonth={handlePrevMonth}
        />
      </View>
    ),
    [locale.today, startDate, endDate],
  );

  return (
    <View style={[{ position: 'relative' }, style?.container]}>
      <View
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator />
      </View>
      <FlatList
        ref={ref}
        keyExtractor={(item: Month_Type) => item.id}
        data={months}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={handleRenderItem}
        // onTouchStart={(e) => console.log(e.nativeEvent.force)}
        getItemLayout={(_, index) => {
          return {
            length: width,
            offset: width * index,
            index,
          };
        }}
        onScroll={(e) => {
          // console.log(e.nativeEvent.contentOffset.x);
          // setCurrentIndex(e.nativeEvent.contentOffset.x);
        }}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(
            Math.floor(event.nativeEvent.contentOffset.x) /
              Math.floor(event.nativeEvent.layoutMeasurement.width),
          );

          // setCurrentIndex(index);
          // console.log(index, currentIndex, 'index');
        }}
        initialScrollIndex={getInitialIndex()}
        initialNumToRender={initialNumToRender}
        {...flatListProps}
      />
    </View>
  );
};

export default CalendarList;
