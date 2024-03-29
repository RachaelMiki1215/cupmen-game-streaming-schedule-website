import { faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { User, SocialAccount, StreamingScheduleType } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { RiKickFill } from "@remixicon/react";

//#region socials
const MyYouTube: SocialAccount = {
  name: "YouTube",
  username: "cupnoodles7806",
  url: "https://www.youtube.com/@cupnoodles7806",
  icon: <FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000" }} />,
};

const MyYouTubeLive = ({ url }: { url: string }): SocialAccount => {
  return { ...MyYouTube, url: url };
};

const MyKick: SocialAccount = {
  name: "Kick",
  username: "mikinoodles",
  url: "https://kick.com/mikinoodles",
  icon: <RiKickFill style={{ color: "#53fc18" }} />,
};

const MyTwitch: SocialAccount = {
  name: "Twitch",
  username: "MikiNoodles",
  url: "https://www.twitch.tv/mikinoodles",
  icon: <FontAwesomeIcon icon={faTwitch} style={{ color: "#9147ff" }} />,
};
//#endregion

//#region users
const User_Hakka: User = {
  name: "ハッカ",
  socials: [
    {
      name: "X",
      username: "@hakka_okashi",
      url: "https://twitter.com/hakka_okashi",
    },
  ],
};
//#endregion

const StreamingSchedule: StreamingScheduleType[] = [
  {
    datetime: new Date("2024-01-14T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第16回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/pbTDUphqr5I?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-15T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第17回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/c77JfUUZCXk?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-16T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第18回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/4NYmmtGWjuM?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-17T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第19回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/efBW2V3g3kg?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-18T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第20回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/SYPA7iWGu7I?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-20T21:00:00.000-06:00"),
    game: "Minecraft（統合版）",
    title: "【第6回】🍃と🍜ののんびりマイクラSkyBlock",
    description: "",
    platform: [MyTwitch],
    streamingWith: [User_Hakka],
  },
  {
    datetime: new Date("2024-01-22T21:00:00.000-06:00"),
    game: "Terraria",
    title: "【初回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/9lo5bBQSwBU?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-23T21:00:00.000-06:00"),
    game: "Minecraft（Java）",
    title: "【第21回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/ap4RZvRxXEo?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-25T21:00:00.000-06:00"),
    game: "Sims 4",
    title: "【初回】カップ麺がSims 4で神ごっこするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/PYuBWQD57Ys?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-29T21:00:00.000-06:00"),
    game: "Terraria",
    title: "【第2回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/G5-bP5RSbKM?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-01-30T21:00:00.000-06:00"),
    game: "Minecraft（Java）",
    title: "【第22回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/0YiMbeowaR8?feature=share",
      }),
      MyKick,
    ],
  },
  {
    datetime: new Date("2024-02-01T21:00:00.000-06:00"),
    game: "Sims 4",
    title: "【第2回】カップ麺がSims 4で神ごっこするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/d78E-Y7S4o4?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-05T21:00:00.000-06:00"),
    game: "Terraria",
    title: "【第3回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/Cfr0rXCgukY?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-06T21:00:00.000-06:00"),
    game: "Minecraft（Java）",
    title: "【第23回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/4tCiyu0zuxw?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-08T21:00:00.000-06:00"),
    game: "Turnip Boy Commits Tax Evasion",
    title:
      "【初回】確定申告の時期だけどカブの脱税を手伝うよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/PHziidkezKg?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-12T21:00:00.000-06:00"),
    game: "Terraria",
    title: "【第4回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/BzNtCQI9zhE?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-13T21:00:00.000-06:00"),
    game: "Minecraft（Java）",
    title: "【第24回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/K0zJIpaspPk?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-15T21:00:00.000-06:00"),
    game: "Sims 4",
    title: "【第3回】カップ麺がSims 4で神ごっこするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/O2sC-zZ3pfg?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-19T21:00:00.000-06:00"),
    game: "Terraria",
    title: "【第5回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/Vd5dhIATO9E?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-20T21:00:00.000-06:00"),
    game: "Minecraft（Java）",
    title: "【第25回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/i7ZT_kOMGKU?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-22T21:00:00.000-06:00"),
    game: "Turnip Boy Commits Tax Evasion",
    title:
      "【第2回】確定申告の時期だけどカブの脱税を手伝うよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/oeSLVKTpXk8?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-26T21:00:00.000-06:00"),
    game: "Terraria",
    title: "【第6回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/z8N0hUyIkHs?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-27T21:00:00.000-06:00"),
    game: "Minecraft（Java）",
    title: "【第26回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/WY2A9jlgJfY?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-02-29T21:00:00.000-06:00"),
    game: "Sims 4",
    title: "【第4回】カップ麺がSims 4で神ごっこするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/4KQ9PWjyKZ8?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-04T21:00:00.000-06:00"),
    game: "Terraria",
    title: "【第7回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/qzU4vQlCN_8?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-05T21:00:00.000-06:00"),
    game: "Minecraft (Java)",
    title: "【第27回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/bFmcTZh8yp4?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-07T21:00:00.000-06:00"),
    game: "Undertale",
    title: "【第1回】カップ麺がUndertaleで未知に遭遇【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/s0um0avDIJw?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-11T22:00:00.000-05:00"),
    game: "Terraria",
    title: "【第8回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/HgF89pR46bo?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-12T22:00:00.000-05:00"),
    game: "Minecraft (Java)",
    title: "【第28回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/fLCIw_d5hTU?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-14T22:00:00.000-05:00"),
    game: "Sims 4",
    title: "【第5回】カップ麺がSims 4で神ごっこするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/Z3sQa7PoUEg?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-18T22:00:00.000-05:00"),
    game: "Terraria",
    title: "【第9回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/Qw0qtrZ-JF0?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-19T22:00:00.000-05:00"),
    game: "Minecraft (Java)",
    title: "【第29回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/Wl9JNa7vltw?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-21T22:00:00.000-05:00"),
    game: "Undertale",
    title: "【第2回】カップ麺がUndertaleで未知に遭遇【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/8oIQgc8aBvY?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-25T22:00:00.000-05:00"),
    game: "Terraria",
    title: "【第10回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/F1Z2PivwP7g?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-26T22:00:00.000-05:00"),
    game: "Minecraft (Java)",
    title: "【第30回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/bJoBWjy0LyM?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
  {
    datetime: new Date("2024-03-28T22:00:00.000-05:00"),
    game: "Sims 4",
    title: "【第6回】カップ麺がSims 4で神ごっこするよ【ゲームプレイ配信】",
    description: "",
    platform: [
      MyYouTubeLive({
        url: "https://youtube.com/live/eAYUlgh_W-4?feature=share",
      }),
      MyKick,
      MyTwitch,
    ],
  },
];

export default StreamingSchedule;
