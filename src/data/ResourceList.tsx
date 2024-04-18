import React from "react";
// TODO: Fix reference of style in different folder not sharing immediate parent
import * as Style from "../pages/global.module.css";

const resourceList = [
  {
    link: "https://fontawesome.com/",
    name: "FontAwesome",
    description: <>JavaScriptで使えるアイコンライブラリ。凄く重宝してる✨</>,
  },
  {
    link: "https://remixicon.com/",
    name: "Remix Icon",
    description: (
      <>
        同じくJavaScriptで使えるアイコンライブラリ。ニッチなところもカバーしてあって助かる🥰
      </>
    ),
  },
  {
    link: "https://fonts.google.com/",
    name: "Google Fonts",
    description: (
      <>
        <strong>このフォント</strong>（
        <a href="https://fonts.google.com/specimen/Yomogi" target="_blank">
          Yomogi
        </a>
        ）をウェブ用に配布してくれているところ。使いやすい👍
      </>
    ),
  },
  {
    link: "https://mihifont.netlify.app/",
    name: "みひらめフォント",
    description: (
      <>
        <strong className={Style.mihiFont}>このフォント</strong>
        を配布してくれているところ。ありがたい🙏
      </>
    ),
  },
];

export default resourceList;
