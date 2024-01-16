import React from "react";
import * as Style from "./Background.module.css";

const Background: React.FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.caramel}></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Background;
