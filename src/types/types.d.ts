import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type SocialAccount = {
  name: string;
  username: string;
  url: string;
  icon?: React.ReactNode;
};

type User = {
  name: string;
  socials?: SocialAccount[];
};

type StreamingScheduleType = {
  datetime: Date;
  game: string;
  title: string;
  description: string;
  platform: SocialAccount[];
  streamingWith?: User[];
};

export { User, StreamingScheduleType, SocialAccount };
