import React, { useEffect, useRef, useState } from "react";
import { StreamingScheduleType } from "../../types/types";
import * as Style from "./StreamButton.module.css";

const StreamButton: React.FC<{ item: StreamingScheduleType }> = ({ item }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [coords, setMouseCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function checkClickLocation(e) {
      if (itemRef.current && !itemRef.current.contains(e.target)) {
        setIsClicked(false);
      }
    }

    window.addEventListener("mousedown", checkClickLocation);
    return () => {
      window.removeEventListener("mousedown", checkClickLocation);
    };
  }, [itemRef]);

  return (
    <div
      ref={itemRef}
      className={Style.streamButton}
      onClick={(e) => {
        setIsClicked(true);
        setMouseCoords({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <div>{`${item.datetime
        .getHours()
        .toString()
        .padStart(2, "0")}:${item.datetime
        .getMinutes()
        .toString()
        .padStart(2, "0")}~`}</div>
      <div>{item.title}</div>
      <dl
        className={Style.streamDetails}
        style={{
          top: coords.y,
          left: coords.x,
          opacity: isClicked ? 1 : 0,
        }}
      >
        <dt>Time</dt>
        <dd>{`${item.datetime
          .getHours()
          .toString()
          .padStart(2, "0")}:${item.datetime
          .getMinutes()
          .toString()
          .padStart(2, "0")}~`}</dd>
        <dt>Title</dt>
        <dd>{item.title}</dd>
        <dt>Game</dt>
        <dd>{item.game}</dd>
        {/* <dt>Platforms</dt>
        <dd></dd> */}
      </dl>
    </div>
  );
};

export default StreamButton;
