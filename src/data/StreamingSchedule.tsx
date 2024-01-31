import { faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { User, SocialAccount, StreamingScheduleType } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

//#region socials
const MyYouTube: SocialAccount = {
  name: "YouTube",
  username: "cupnoodles7806",
  url: "https://www.youtube.com/@cupnoodles7806",
  icon: <FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000" }} />,
};

const MyKick: SocialAccount = {
  name: "Kick",
  username: "mikinoodles",
  url: "https://kick.com/mikinoodles",
  icon: (
    <span
      style={{
        color: "black",
        fontWeight: "bold",
        textTransform: "uppercase",
        background: "#53fc18",
        padding: "2px 4px",
        borderRadius: "5px",
        fontFamily: "monospace",
      }}
    >
      Kick
    </span>
  ),
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
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-01-15T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第17回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-01-16T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第18回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-01-17T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第19回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-01-18T21:00:00.000-06:00"),
    game: "Minecraft（Java版）",
    title: "【第20回】【ゲームプレイ生配信】カップ麺がのんびりマイクラするよ",
    description: "",
    platform: [MyYouTube, MyKick],
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
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-01-23T21:00:00.000-06:00"),
    game: "Minecraft（Java）",
    title: "【第21回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-01-25T21:00:00.000-06:00"),
    game: "Sims 4",
    title: "【初回】カップ麺がSims 4で神ごっこするよ【ゲームプレイ配信】",
    description: "",
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-01-29T21:00:00.000-06:00"),
    game: "Terraria",
    title: "【第2回】カップ麺がTerrariaやるらしい【ゲームプレイ配信】",
    description: "",
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-01-30T21:00:00.000-06:00"),
    game: "Minecraft（Java）",
    title: "【第22回】カップ麺がのんびりマイクラするよ【ゲームプレイ配信】",
    description: "",
    platform: [MyYouTube, MyKick],
  },
  {
    datetime: new Date("2024-02-01T21:00:00.000-06:00"),
    game: "Sims 4",
    title: "【初回】カップ麺がSims 4で神ごっこするよ【ゲームプレイ配信】",
    description: "",
    platform: [MyYouTube, MyKick, MyTwitch],
  },
];

export default StreamingSchedule;
