import React from "react";
import * as Style from "./SocialsBar.module.css";
import {
  faYoutube,
  faTwitch,
  faDiscord,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialsList = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@cupnoodles7806",
    icon: <FontAwesomeIcon icon={faYoutube} />,
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/mikinoodles",
    icon: <FontAwesomeIcon icon={faTwitch} />,
  },
  // {
  //   name: "Kick",
  //   link: "https://kick.com/mikinoodles",
  //   icon:
  // },
  {
    name: "Discord",
    link: "https://discord.com/users/1074163211957452870",
    icon: <FontAwesomeIcon icon={faDiscord} />,
  },
  {
    name: "X",
    link: "https://twitter.com/TonkotsuCupMen",
    icon: <FontAwesomeIcon icon={faXTwitter} />,
  },
];

const SocialsBar: React.FC<{
  className?: any;
}> = ({ className }: { className?: any }) => {
  return (
    <ul className={`${Style.container} ${className}`}>
      {socialsList.map((s) => {
        return (
          <li key={`social_${s.name}`}>
            <a href={s.link} target="_blank">
              {s.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialsBar;
