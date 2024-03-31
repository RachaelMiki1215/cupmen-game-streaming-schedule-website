import React, { useReducer } from "react";
import * as Style from "./Calendar.module.css";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "../../hooks/WindowHooks";

//#region types
type CalendarProps = {
  startDate?: Date;
  contents?: {
    dateTime: Date;
    item: React.ReactNode | string;
  }[];
};

interface CalendarReducerState {
  year: number;
  monthIndex: number;
  calendarDates: Date[];
}

enum CalendarReducerActionType {
  Increment = "INCREMENT",
  Decrement = "DECREMENT",
  Reset = "RESET",
}

interface CalendarReducerAction {
  type: CalendarReducerActionType;
  payload: {
    year: number;
    monthIndex: number;
  };
}
//#endregion

//#region arrays
const weekdaysJA: string[] = ["日", "月", "火", "水", "木", "金", "土"];

const monthsEN: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
//#endregion

//#region dateFunctions
const getCalendarStartDate = (date: Date): Date => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  if (firstDayOfMonth.getDay() === 0) return firstDayOfMonth;

  const calendarStartDate = new Date(
    firstDayOfMonth.getFullYear(),
    firstDayOfMonth.getMonth(),
    firstDayOfMonth.getDate() - firstDayOfMonth.getDay()
  );

  return calendarStartDate;
};
const getCalendarEndDate = (date: Date): Date => {
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  if (lastDayOfMonth.getDay() === 6) return lastDayOfMonth;

  const calendarEndDate = new Date(
    lastDayOfMonth.getFullYear(),
    lastDayOfMonth.getMonth(),
    lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay())
  );

  return calendarEndDate;
};
const getCalendarDates = (year: number, monthIndex: number): Date[] => {
  const dateArr: Date[] = [];

  const startDate = getCalendarStartDate(new Date(year, monthIndex, 1));
  const endDate = getCalendarEndDate(new Date(year, monthIndex, 1));

  let datePointer: Date = startDate;
  do {
    dateArr.push(new Date(+datePointer));
    datePointer.setDate(datePointer.getDate() + 1);
  } while (datePointer <= endDate);

  return dateArr;
};
//#endregion

//#region calendar reducer setup
const currentDate = new Date();
const initialCalendarState: CalendarReducerState = {
  year: currentDate.getFullYear(),
  monthIndex: currentDate.getMonth(),
  calendarDates: getCalendarDates(
    currentDate.getFullYear(),
    currentDate.getMonth()
  ),
};
const calendarStateReducer = (
  state: CalendarReducerState,
  action: CalendarReducerAction
): CalendarReducerState => {
  switch (action.type) {
    case CalendarReducerActionType.Increment:
      if (state.monthIndex === 11) {
        return {
          year: state.year + 1,
          monthIndex: 0,
          calendarDates: getCalendarDates(state.year + 1, 0),
        };
      }
      return {
        year: state.year,
        monthIndex: state.monthIndex + 1,
        calendarDates: getCalendarDates(state.year, state.monthIndex + 1),
      };
    case CalendarReducerActionType.Decrement:
      if (state.monthIndex === 0) {
        return {
          year: state.year - 1,
          monthIndex: 11,
          calendarDates: getCalendarDates(state.year - 1, 11),
        };
      }
      return {
        year: state.year,
        monthIndex: state.monthIndex - 1,
        calendarDates: getCalendarDates(state.year, state.monthIndex - 1),
      };
    case CalendarReducerActionType.Reset:
      return {
        year: currentDate.getFullYear(),
        monthIndex: currentDate.getMonth(),
        calendarDates: getCalendarDates(
          currentDate.getFullYear(),
          currentDate.getMonth()
        ),
      };
  }
};
//#endregion

const MyCalendar: React.FC<CalendarProps> = ({ contents }) => {
  const [calendarState, dispatchCalendarState] = useReducer(
    calendarStateReducer,
    initialCalendarState
  );
  const windowSize = useWindowSize();

  const getPreviousMonth = () => {
    dispatchCalendarState({
      type: CalendarReducerActionType.Decrement,
      payload: { year: NaN, monthIndex: NaN },
    });
  };
  const getNextMonth = () => {
    dispatchCalendarState({
      type: CalendarReducerActionType.Increment,
      payload: { year: NaN, monthIndex: NaN },
    });
  };
  const resetCalendar = () => {
    dispatchCalendarState({
      type: CalendarReducerActionType.Reset,
      payload: { year: NaN, monthIndex: NaN },
    });
  };

  return (
    <div className={Style.container}>
      <div className={Style.buttons}>
        <button onClick={getPreviousMonth}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button onClick={resetCalendar}>
          {calendarState.year}年 {calendarState.monthIndex + 1}月
        </button>
        <button onClick={getNextMonth}>
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
      <div className={Style.calendar}>
        {weekdaysJA.map((day, index) => (
          <div
            className={`${Style.dayHeader} ${
              index === 0 || index === 6 ? Style.weekendDayHeader : ""
            }`}
            key={`weekday_${day}`}
          >
            {day}
          </div>
        ))}
        {calendarState.calendarDates.map((date) => (
          <div
            key={`day_${date.toString()}`}
            className={`${Style.dateCell} ${
              date.getDay() === 0 || date.getDay() === 6 ? Style.weekend : ""
            } ${
              date.getMonth() === calendarState.monthIndex
                ? ""
                : Style.otherMonth
            } ${
              date.getFullYear() === currentDate.getFullYear() &&
              date.getMonth() === currentDate.getMonth() &&
              date.getDate() === currentDate.getDate()
                ? Style.today
                : ""
            }`}
          >
            <div className={Style.backdropLayer}></div>
            <span className={Style.dateNum}>
              {date.getMonth() != calendarState.monthIndex &&
                `${date.getMonth() + 1}/`}
              {date.getDate()}
              {windowSize.width < 600 ? ` (${weekdaysJA[date.getDay()]})` : ""}
            </span>
            {contents &&
              contents
                .filter((content) => {
                  return (
                    content.dateTime.getFullYear() === date.getFullYear() &&
                    content.dateTime.getMonth() === date.getMonth() &&
                    content.dateTime.getDate() === date.getDate()
                  );
                })
                .map((item) => <div key={Math.random()}>{item.item}</div>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCalendar;
