import React, { useEffect, useState } from "react";
import { HeadFC, PageProps } from "gatsby";
import useQueryParams from "../../hooks/QueryParamHooks";
import * as Styles from "./resources.module.css";

const DateTimePage: React.FC<PageProps> = ({ location }) => {
  const params = useQueryParams(location.search);
  const timezone: number = params.timezone ? parseInt(params.timezone) : NaN;
  const displayFormat: number = params.displayFormat
    ? parseInt(params.displayFormat)
    : 0;
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
    <div className=".time-container">
      <span className=".hours">
        {(time.getHours() % (displayFormat === 2 ? 12 : 24))
          .toString()
          .padStart(2, "0")}
      </span>
      <span className=".colon">:</span>
      <span className=".minutes">
        {time.getMinutes().toString().padStart(2, "0")}
      </span>
      {showSeconds && (
        <>
          <span className=".colon">:</span>
          <span className=".seconds">
            {time.getSeconds().toString().padStart(2, "0")}
          </span>
        </>
      )}
      {displayFormat === 2 && (
        <span className=".am-pm">{time.getHours() < 12 ? " AM" : " PM"}</span>
      )}
    </div>
  );
};

export default DateTimePage;

export const Head: HeadFC = () => (
  <>
    <body className={Styles.body} />
    <title>配信素材: 時計</title>
  </>
);
