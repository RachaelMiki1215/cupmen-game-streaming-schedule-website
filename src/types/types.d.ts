type SocialAccount = {
  name: string;
  username: string;
  url: string;
};

type User = {
  name: string;
  socials?: SocialAccount | SocialAccount[];
};

type StreamingScheduleType = {
  datetime: Date;
  game: string;
  title: string;
  description: string;
  platform: SocialAccount | SocialAccount[];
  streamingWith?: User | User[];
};

export { User, StreamingScheduleType, SocialAccount };
