import React, { useEffect, useState } from "react";
import { HeadFC, PageProps } from "gatsby";
import useQueryParams from "../../hooks/QueryParamHooks";
import "./resources.css";
import * as Styles from "./resources.module.css";
import CopyButton from "../../components/Button/CopyButton";

const TimePage: React.FC<PageProps> = ({ location }) => {
  const params = useQueryParams(location.search);
  // TODO: Need to utilize this query param eventually
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
    <div className="time-container">
      <span className="hours">
        {(time.getHours() % (displayFormat === 12 ? 12 : 24))
          .toString()
          .padStart(2, "0")}
      </span>
      <span className="colon">:</span>
      <span className="minutes">
        {time.getMinutes().toString().padStart(2, "0")}
      </span>
      {showSeconds && (
        <>
          <span className="colon">:</span>
          <span className="seconds">
            {time.getSeconds().toString().padStart(2, "0")}
          </span>
        </>
      )}
      {displayFormat === 12 && (
        <span className=".am-pm">{time.getHours() < 12 ? " AM" : " PM"}</span>
      )}
    </div>
  );
};

const TimeIframeDiv: React.FC<{ location: any }> = ({
  location,
}: {
  location: any;
}) => {
  const [displayFormat, setDisplayFormat] = useState<number>(24);
  const [showSeconds, setShowSeconds] = useState<boolean>(false);
  const [widgetPath, setWidgetPath] = useState<string>("");

  useEffect(() => {
    setWidgetPath(
      `/streaming-resources/time?displayFormat=${displayFormat}&showSeconds=${showSeconds}`
    );
  }, [displayFormat, showSeconds]);

  return (
    <div className={Styles.streamingMaterialDiv}>
      <iframe src={`.${widgetPath}`} />
      <div>
        <h4>使用方法</h4>
        <ol>
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
export { TimeIframeDiv };

export const Head: HeadFC = () => (
  <>
    <body className="body" />
    <title>配信素材: 時計</title>
  </>
);
