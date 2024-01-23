import React from "react";
import "./Layout.css";
import * as Styles from "./Layout.module.css";
import SocialsBar from "../SocialsBar/SocialsBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <SocialsBar className={Styles.socialsBar} />
    </>
  );
};

export default Layout;
