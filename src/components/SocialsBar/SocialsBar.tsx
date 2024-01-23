import React from "react";
import * as Style from "./SocialsBar.module.css";
import {
  faYoutube,
  faTwitch,
  faDiscord,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialsBar: React.FC<{
  className?: any;
}> = ({ className }: { className?: any }) => {
  return (
    <ul className={`${Style.container} ${className}`}>
      <li>
        <a href="https://www.youtube.com/@cupnoodles7806" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
      <li>
        <a href="https://www.twitch.tv/mikinoodles" target="_blank">
          <FontAwesomeIcon icon={faTwitch} />
        </a>
      </li>
      {/* TODO: Figure out what to do with Kick icon, where to get it, etc. */}
      {/* <li>
        <a href="https://kick.com/mikinoodles"></a>
      </li> */}
      <li>
        <a href="https://discord.com/users/1074163211957452870" target="_blank">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/TonkotsuCupMen" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </li>
    </ul>
  );
};

export default SocialsBar;
