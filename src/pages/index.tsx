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
        <section>
          <h2>
            <span>🎮ゲーム配信</span>
            <span>スケジュール🎮</span>
          </h2>
          <MyCalendar contents={contentArr} />
        </section>
        <section>
          <h2>💬このウェブサイトについて💬</h2>
          <p>
            このウェブサイトは主に<strong>カップ麺（配信者）</strong>
            の配信スケジュールを共有するためのものです。
            <br />
            本件についてのご質問・ご要望等はX（
            <a href="https://twitter.com/TonkotsuCupMen" target="_blank">
              @TonkotsuCupMen
            </a>
            ）にて受け付けております。
          </p>
        </section>
        <section>
          <h2>🍂使用素材🍂</h2>
          <ul>
            <li>
              <a href="https://fontawesome.com/">FontAwesome</a> -
              JavaScriptで使えるアイコンライブラリ。凄く重宝してる✨
            </li>
            <li>
              <a href="https://fonts.google.com/">Google Fonts</a> -
              <strong>このフォント</strong>（
              <a href="https://fonts.google.com/specimen/Yomogi">Yomogi</a>
              ）をウェブで使用するために配布してくれてるところ。使いやすい🔧
            </li>
            <li>
              <a href="https://mihifont.netlify.app/">みひらめフォント</a> -{" "}
              <strong className={Style.mihiFont}>このフォント</strong>
              を配布してくれてるところ。ありがたい🙏
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>カップ麺🍜ゲーム配信スケジュール</title>
);
