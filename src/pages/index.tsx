import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MyCalendar from "../components/Calendar/Calendar";
import * as Style from "./global.module.css";
import StreamingSchedule from "../data/StreamingSchedule";
import { StreamingScheduleType } from "../types/types";
import Background from "../components/Background/Background";

//#region styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};
//#endregion

const StreamButton: React.FC<{ item: StreamingScheduleType }> = ({ item }) => {
  return (
    <div className={Style.streamButton}>
      <div className={Style.streamTime}>{`${item.datetime
        .getHours()
        .toString()
        .padStart(2, "0")}:${item.datetime
        .getMinutes()
        .toString()
        .padStart(2, "0")}~`}</div>
      <div>{item.title}</div>
    </div>
  );
};

const contentArr = StreamingSchedule.map((s) => {
  return {
    dateTime: s.datetime,
    item: <StreamButton item={s} />,
  };
});

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Background />
      <main className={Style.main}>
        <h1>カップ麺</h1>
        <h2>ゲーム配信スケジュール</h2>
        <MyCalendar contents={contentArr} />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>カップ麺🍜ゲーム配信スケジュール</title>
);
