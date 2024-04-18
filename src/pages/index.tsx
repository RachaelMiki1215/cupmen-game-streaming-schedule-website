import React, { useRef } from "react";
import type { HeadFC, PageProps } from "gatsby";
import MyCalendar from "../components/Calendar/Calendar";
import * as Style from "./global.module.css";
import StreamingSchedule from "../data/StreamingSchedule";
import resourceList from "../data/ResourceList";
import Layout from "../components/Layout/Layout";
import StreamButton from "../components/StreamButton/StreamButton";
import { useObserver } from "../hooks/ObserverHooks";
import { TimeWidgetDiv } from "./streaming-resources/time";
import { CountDownDiv } from "./streaming-resources/countdown";

const contentArr = StreamingSchedule.map((s) => {
  return {
    dateTime: s.datetime,
    item: <StreamButton item={s} />,
  };
});

const CalendarDiv: React.FC = () => {
  return (
    <div className={Style.calendarDiv}>
      <h2>
        <span>🎲ゲーム配信</span>
        <span>スケジュール🎲</span>
      </h2>
      <MyCalendar contents={contentArr} />
    </div>
  );
};

const StreamingMaterialsDiv: React.FC<{ location: any }> = ({
  location,
}: {
  location: any;
}) => {
  return (
    <div>
      <h2>🧰配布素材🧰</h2>
      <h3>時計表示</h3>
      <TimeWidgetDiv location={location} />
      <h3>カウントダウンタイマー</h3>
      <CountDownDiv location={location} />
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
          X{" "}
          <a href="https://twitter.com/TonkotsuCupMen" target="_blank">
            @TonkotsuCupMen
          </a>{" "}
          にて受け付けております。
        </span>
      </p>
    </div>
  );
};

const ResourceDiv: React.FC = () => {
  return (
    <div>
      <h2>🍂使用素材🍂</h2>
      <ul className={Style.resourceList}>
        {resourceList.map((r) => {
          return (
            <li
              className={Style.resourceListItem}
              key={`resource_${Math.random()}`}
            >
              <a
                className={Style.resourceListItem_name}
                href={r.link}
                target="_blank"
              >
                {r.name}
              </a>
              <div className={Style.resourceListItem_description}>
                {r.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const calendarRef = useRef<HTMLElement>(null);
  const streamingMaterialsSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const resourceSectionRef = useRef<HTMLElement>(null);
  useObserver(streamingMaterialsSectionRef);
  useObserver(aboutSectionRef);
  useObserver(resourceSectionRef);

  return (
    <Layout>
      <main>
        <h1>カップ麺</h1>
        <section className={Style.section} ref={calendarRef}>
          <CalendarDiv />
        </section>
        <section className={Style.section} ref={streamingMaterialsSectionRef}>
          <StreamingMaterialsDiv location={location} />
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
    <script
      src="https://kit.fontawesome.com/ed0b8ed380.js"
      crossOrigin="anonymous"
    ></script>
  </>
);
