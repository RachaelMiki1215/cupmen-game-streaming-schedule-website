import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MyCalendar from "../components/Calendar/Calendar";
import * as Style from "./global.module.css";
import StreamingSchedule from "../data/StreamingSchedule";
import Layout from "../components/Layout/Layout";
import StreamButton from "../components/StreamButton/StreamButton";

const contentArr = StreamingSchedule.map((s) => {
  return {
    dateTime: s.datetime,
    item: <StreamButton item={s} />,
  };
});

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>カップ麺</h1>
        <section className={Style.section}>
          <h2>
            <span>🎮ゲーム配信</span>
            <span>スケジュール🎮</span>
          </h2>
          <MyCalendar contents={contentArr} />
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>カップ麺🍜ゲーム配信スケジュール</title>
);
