import React, { useEffect, useRef, useState } from "react";
import { HeadFC, PageProps } from "gatsby";
import useQueryParams from "../../hooks/QueryParamHooks";
import "./resources.css";
import * as Styles from "./resources.module.css";
import CopyButton from "../../components/Button/CopyButton";
import RadioButtonList from "../../components/RadioButton/RadioButtonList";
import { RiMoonClearFill, RiSunFill } from "@remixicon/react";

interface TimeProps {
  timezone?: number;
  displayFormat?: number;
  showSeconds?: boolean;
  showIcon?: boolean;
  containerStyle?: React.CSSProperties;
  hourStyle?: React.CSSProperties;
  minuteStyle?: React.CSSProperties;
  secondStyle?: React.CSSProperties;
  colonStyle?: React.CSSProperties;
  ampmStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}

// TODO: Need to add timezone logic
const TimeDisplay: React.FC<TimeProps> = ({
  timezone,
  displayFormat = 24,
  showSeconds = false,
  showIcon = false,
  containerStyle,
  hourStyle,
  minuteStyle,
  secondStyle,
  colonStyle,
  ampmStyle,
  iconStyle,
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
        {([0, 12].includes(time.getHours()) && displayFormat === 12
          ? 12
          : time.getHours() % (displayFormat === 12 ? 12 : 24)
        )
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
      {showIcon &&
        (time.getHours() < 5 || time.getHours() > 19 ? (
          <RiMoonClearFill className="icon" />
        ) : (
          <RiSunFill className="icon" />
        ))}
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
  const showIcon: boolean = params.showIcon
    ? /true/.test(params.showIcon)
    : false;

  return (
    <TimeDisplay
      displayFormat={displayFormat}
      showSeconds={showSeconds}
      timezone={timezone}
      showIcon={showIcon}
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
  const [showIcon, setShowIcon] = useState<boolean>(false);
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
      `/streaming-resources/time?displayFormat=${displayFormat}&showSeconds=${showSeconds}&showIcon=${showIcon}`
    );
  }, [displayFormat, showSeconds, showIcon]);

  return (
    <div className={Styles.streamingMaterialDiv}>
      <div className={Styles.timeContainer}>
        <TimeDisplay
          displayFormat={displayFormat}
          showSeconds={showSeconds}
          showIcon={showIcon}
        />
      </div>
      <div className={Styles.streamingMaterialDescription}>
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
            時刻のアイコン（太陽・月など）を表示するか選択：
            <br />
            <RadioButtonList
              items={[
                {
                  label: "する",
                  action: () => {
                    setShowIcon(true);
                  },
                },
                {
                  label: "しない",
                  action: () => {
                    setShowIcon(false);
                  },
                  checkedOnDefault: true,
                },
              ]}
              id="showIcon"
            />
          </li>
          {/* TODO: Add Color/Font customization here */}
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
          {/* <li>
            OBSもしくはStream
            LabsでブラウザソースのCSS欄に、取得したテキストを貼付
          </li> */}
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
