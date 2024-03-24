import React, { useEffect, useRef, useState } from "react";
import { HeadFC, PageProps } from "gatsby";
import useQueryParams from "../../hooks/QueryParamHooks";
import "./resources.css";
import * as Styles from "./resources.module.css";
import CopyButton from "../../components/Button/CopyButton";
import RadioButtonList from "../../components/RadioButton/RadioButtonList";

interface TimeProps {
  timezone?: number;
  displayFormat?: number;
  showSeconds?: boolean;
  containerStyle?: React.CSSProperties;
  hourStyle?: React.CSSProperties;
  minuteStyle?: React.CSSProperties;
  secondStyle?: React.CSSProperties;
  colonStyle?: React.CSSProperties;
  ampmStyle?: React.CSSProperties;
}

// TODO: Need to add timezone logic
const TimeDisplay: React.FC<TimeProps> = ({
  timezone,
  displayFormat = 24,
  showSeconds = false,
  containerStyle,
  hourStyle,
  minuteStyle,
  secondStyle,
  colonStyle,
  ampmStyle,
}: TimeProps) => {
  const [time, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-container" style={containerStyle}>
      <span className="hours" style={hourStyle}>
        {(time.getHours() % (displayFormat === 12 ? 12 : 24))
          .toString()
          .padStart(2, "0")}
      </span>
      <span className="colon" style={colonStyle}>
        :
      </span>
      <span className="minutes" style={minuteStyle}>
        {time.getMinutes().toString().padStart(2, "0")}
      </span>
      {showSeconds && (
        <>
          <span className="colon" style={colonStyle}>
            :
          </span>
          <span className="seconds" style={secondStyle}>
            {time.getSeconds().toString().padStart(2, "0")}
          </span>
        </>
      )}
      {displayFormat === 12 && (
        <span className="am-pm" style={ampmStyle}>
          {time.getHours() < 12 ? " AM" : " PM"}
        </span>
      )}
    </div>
  );
};

const TimePage: React.FC<PageProps> = ({ location }) => {
  const params = useQueryParams(location.search);
  const timezone: number = params.timezone ? parseInt(params.timezone) : NaN;
  const displayFormat: number = params.displayFormat
    ? parseInt(params.displayFormat)
    : 24;
  const showSeconds: boolean = params.showSeconds
    ? /true/.test(params.showSeconds)
    : false;

  const [time, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeDisplay
      displayFormat={displayFormat}
      showSeconds={showSeconds}
      timezone={timezone}
    />
  );
};

const TimeWidgetDiv: React.FC<{ location: any }> = ({
  location,
}: {
  location: any;
}) => {
  const [displayFormat, setDisplayFormat] = useState<number>(24);
  const [showSeconds, setShowSeconds] = useState<boolean>(false);
  const [containerStyle, setContainerStyle] = useState<{
    fontFamily: string;
    fontSize: number;
    fontColor: string;
    backgroundColor: string;
    backgroundBorderRadius: number;
    width: number;
    height: number;
  }>();
  const [widgetPath, setWidgetPath] = useState<string>("");

  useEffect(() => {
    setWidgetPath(
      `/streaming-resources/time?displayFormat=${displayFormat}&showSeconds=${showSeconds}`
    );
  }, [displayFormat, showSeconds]);

  return (
    <div className={Styles.streamingMaterialDiv}>
      <div className={Styles.timeContainer}>
        <TimeDisplay displayFormat={displayFormat} showSeconds={showSeconds} />
      </div>
      <div className={Styles.streamingMaterialDescription}>
        <h4>使用方法</h4>
        <ol>
          <li>
            <span>表示方式を選択：</span>
            <br />
            <RadioButtonList
              items={[
                {
                  label: "12hrs (AM/PM)",
                  action: () => {
                    setDisplayFormat(12);
                  },
                },
                {
                  label: "24hrs",
                  action: () => {
                    setDisplayFormat(24);
                  },
                  checkedOnDefault: true,
                },
              ]}
              id="timeDisplayFormat"
            />
          </li>
          <li>
            <span>秒を表示するか選択：</span>
            <br />
            <RadioButtonList
              items={[
                {
                  label: "する",
                  action: () => {
                    setShowSeconds(true);
                  },
                },
                {
                  label: "しない",
                  action: () => {
                    setShowSeconds(false);
                  },
                  checkedOnDefault: true,
                },
              ]}
              id="showSeconds"
            />
          </li>
          <li>
            <span>色や形を変更：</span>
            <br />
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

export default TimePage;
export { TimeWidgetDiv };

export const Head: HeadFC = () => (
  <>
    <body className="body" />
    <title>配信素材: 時計</title>
  </>
);
