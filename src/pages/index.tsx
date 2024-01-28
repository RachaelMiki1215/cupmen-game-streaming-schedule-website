import React, { useRef } from "react";
import type { HeadFC, PageProps } from "gatsby";
import MyCalendar from "../components/Calendar/Calendar";
import * as Style from "./global.module.css";
import StreamingSchedule from "../data/StreamingSchedule";
import Layout from "../components/Layout/Layout";
import StreamButton from "../components/StreamButton/StreamButton";
import { useObserver } from "../hooks/ObserverHooks";

const contentArr = StreamingSchedule.map((s) => {
  return {
    dateTime: s.datetime,
    item: <StreamButton item={s} />,
  };
});

const CalendarDiv: React.FC = () => {
  return (
    <div>
      <h2>
        <span>🎮ゲーム配信</span>
        <span>スケジュール🎮</span>
      </h2>
      <MyCalendar contents={contentArr} />
    </div>
  );
};

const AboutDiv: React.FC = () => {
  return (
    <div>
      <h2>
        <span>💬この</span>
        <span>ウェブサイトに</span>
        <span>ついて💬</span>
      </h2>
      <p>
        <span>
          このウェブサイトは主に<strong>カップ麺（配信者）</strong>の
        </span>
        <span>配信スケジュールを共有するためのものです。</span>
        <br />
        <span>本件についてのご質問・ご要望等は</span>
        <span>
          X（
          <a href="https://twitter.com/TonkotsuCupMen" target="_blank">
            @TonkotsuCupMen
          </a>
          ）にて受け付けております。
        </span>
      </p>
    </div>
  );
};

const ResourceDiv: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const resourceSectionRef = useRef<HTMLElement>(null);
  useObserver(aboutSectionRef);
  useObserver(resourceSectionRef);

  return (
    <Layout>
      <main>
        <h1>カップ麺</h1>
        <section>
          <CalendarDiv />
        </section>
        <section className={Style.section} ref={aboutSectionRef}>
          <AboutDiv />
        </section>
        <section className={Style.section} ref={resourceSectionRef}>
          <ResourceDiv />
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>カップ麺🍜ゲーム配信スケジュール</title>
    <meta charSet="UTF-8" />
    <meta
      name="description"
      content="カップ麺（配信者）のゲームプレイ配信掲載用ウェブサイト"
    />
  </>
);
