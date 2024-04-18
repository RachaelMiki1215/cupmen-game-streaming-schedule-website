import React, { useEffect, useRef, useState } from "react";
import { HeadFC, PageProps } from "gatsby";
import DateTimePicker from "react-datetime-picker";

import useQueryParams from "../../hooks/QueryParamHooks";
import "./resources.css";
import * as Styles from "./resources.module.css";
import CopyButton from "../../components/Button/CopyButton";
import DropDown from "../../components/Dropdown/DropDown";
import TextInput from "../../components/TextInput/TextInput";

interface CountDownProps {
  time: Date;
  displayFormat?: string;
  language?: string;
}

const CountDownTimer: React.FC<CountDownProps> = ({
  time,
  displayFormat = "hr-min-sec",
  language = "en",
}: CountDownProps) => {
  const [countDown, setCountDown] = useState<number>(
    time.getTime() - Date.now()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((current) => {
        return current - 1000;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log(displayFormat);
  }, [displayFormat]);

  const units = {
    hr: (
      <span className="timer-unit unit-hr">
        {language === "ja" ? "時間" : language === "en-abbr" ? "h" : "hr"}
      </span>
    ),
    min: (
      <span className="timer-unit unit-min">
        {language === "ja" ? "分" : language === "en-abbr" ? "m" : "min"}
      </span>
    ),
    sec: (
      <span className="timer-unit unit-sec">
        {language === "ja" ? "秒" : language === "en-abbr" ? "s" : "sec"}
      </span>
    ),
  };

  const minusSign = <span className="timer-minus">-</span>;

  let timeDisplay;
  if (displayFormat === "min-sec") {
    timeDisplay = (
      <>
        <span className="timer-num num-min">
          {Math.floor(Math.abs(countDown) / (60 * 1000))}
        </span>
        {units.min}
        <span className="timer-num num-sec">
          {Math.floor((Math.abs(countDown) % (60 * 1000)) / 1000)}
        </span>
        {units.sec}
      </>
    );
  } else if (displayFormat === "sec") {
    timeDisplay = (
      <>
        <span className="timer-num num-sec">
          {Math.floor(Math.abs(countDown) / 1000)}
        </span>
        {units.sec}
      </>
    );
  } else {
    timeDisplay = (
      <>
        <span className="timer-num num-hr">
          {Math.floor(Math.abs(countDown) / (60 * 60 * 1000))}
        </span>
        {units.hr}
        <span className="timer-num num-min">
          {Math.floor((Math.abs(countDown) % (60 * 60 * 1000)) / (60 * 1000))}
        </span>
        {units.min}
        <span className="timer-num num-sec">
          {Math.floor((Math.abs(countDown) % (60 * 1000)) / 1000)}
        </span>
        {units.sec}
      </>
    );
  }

  return (
    <div className="timer-container">
      {time.getTime() < Date.now() && minusSign}
      {timeDisplay}
    </div>
  );
};

const CountDownPage: React.FC<PageProps> = ({ location }) => {
  const params = useQueryParams(location.search);
  const displayFormat = params.displayFormat;
  const language = params.language;
  // TODO: Figure out how to deal with NaN case
  const time = params.time ? new Date(params.time) : new Date();

  return (
    <CountDownTimer
      time={time}
      displayFormat={displayFormat}
      language={language}
    />
  );
};

const CountDownDiv: React.FC<{ location: any }> = ({
  location,
}: {
  location: any;
}) => {
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [displayFormat, setDisplayFormat] = useState<string>("hr-min-sec");
  const [language, setLanguage] = useState<string>("ja");
  const [widgetPath, setWidgetPath] = useState<string>("");

  useEffect(() => {
    setWidgetPath(
      `/streaming-resources/countdown?time=${dateTime.toISOString()}&displayFormat=${displayFormat}&language=${language}`
    );
  }, [dateTime, displayFormat, language]);

  return (
    <div className={Styles.streamingMaterialDiv}>
      <div className={Styles.timerContainer}>
        <CountDownTimer
          time={dateTime}
          displayFormat={displayFormat}
          language={language}
        />
      </div>
      <div className={Styles.streamingMaterialDescription}>
        <ol>
          <li>
            <span>目標日時を入力：</span>
            <br />
            <TextInput
              placeholder="YYYY/MM/DD HH:mm:ss"
              onChange={(input: string) => {
                const inputtedDate = new Date(input);
                if (!isNaN(inputtedDate.getTime())) {
                  setDateTime(inputtedDate);
                }
              }}
            />
            {/* <DateTimePicker
              onChange={(value) => setDateTime(value as Date)}
              value={dateTime}
              calendarClassName={Styles.countDownTimer_CalendarDiv}
            /> */}
          </li>
          <li>
            <span>表示方式を選択：</span>
            <br />
            <DropDown
              options={[
                {
                  value: "hr-min-sec",
                  displayText: "時間＋分＋秒",
                  action: () => {
                    setDisplayFormat("hr-min-sec");
                  },
                },
                {
                  value: "min-sec",
                  displayText: "分＋秒",
                  action: () => {
                    setDisplayFormat("min-sec");
                  },
                },
                {
                  value: "sec",
                  displayText: "秒",
                  action: () => {
                    setDisplayFormat("sec");
                  },
                },
              ]}
              defaultSelValue={"hr-min-sec"}
            />
          </li>
          <li>
            <span>言語を選択：</span>
            <br />
            <DropDown
              options={[
                {
                  value: "ja",
                  displayText: "日本語",
                  action: () => {
                    setLanguage("ja");
                  },
                },
                {
                  value: "en",
                  displayText: "英語",
                  action: () => {
                    setLanguage("en");
                  },
                },
                {
                  value: "en-abbr",
                  displayText: "英語（省略）",
                  action: () => {
                    setLanguage("en-abbr");
                  },
                },
              ]}
              defaultSelValue={"ja"}
            />
          </li>
          <li>
            <span>下のURLをクリックしてコピー👇</span>
            <br />
            <CopyButton
              contentsToCopy={`${location.origin}${widgetPath}`}
            >{`${location.origin}${widgetPath}`}</CopyButton>
          </li>
          <li>
            OBSもしくはStream LabsでブラウザソースのURL欄に、取得したURLを貼付
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CountDownPage;
export { CountDownDiv };

export const Head: HeadFC = () => (
  <>
    <body className="body" />
    <title>配信素材: タイマー</title>
  </>
);
