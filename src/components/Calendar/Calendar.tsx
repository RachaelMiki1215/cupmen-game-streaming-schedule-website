import React, { useReducer, useState } from "react";
import * as Style from "./Calendar.module.css";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const weekdays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months: string[] = [
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
          {months[calendarState.monthIndex]} {calendarState.year}
        </button>
        <button onClick={getNextMonth}>
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
      <div className={Style.calendar}>
        {weekdays.map((day, index) => (
          <div
            className={Style.dayHeader}
            style={index === 0 || index === 6 ? { color: "gold" } : {}}
            key={`weekday_${day}`}
          >
            {day}
          </div>
        ))}
        {calendarState.calendarDates.map((date) => (
          <div
            key={`day_${date.toString()}`}
            className={`${Style.dateCell} ${
              date.getFullYear() === currentDate.getFullYear() &&
              date.getMonth() === currentDate.getMonth() &&
              date.getDate() === currentDate.getDate()
                ? Style.today
                : ""
            } ${
              date.getMonth() === calendarState.monthIndex
                ? ""
                : Style.otherMonth
            }`}
          >
            <span>
              {date.getMonth() != calendarState.monthIndex &&
                `${date.getMonth() + 1}/`}
              {date.getDate()}
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
                .map((item) => <span key={Math.random()}>{item.item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCalendar;
