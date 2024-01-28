import React, { useEffect, useRef, useState } from "react";
import { StreamingScheduleType } from "../../types/types";
import * as Style from "./StreamButton.module.css";
import { useWindowSize } from "../../hooks/WindowHooks";

const StreamButton: React.FC<{ item: StreamingScheduleType }> = ({ item }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [coords, setMouseCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const windowSize = useWindowSize();

  const cardRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDListElement>(null);

  useEffect(() => {
    setMouseCoords({
      x: cardRef.current?.getBoundingClientRect().x as number,
      y: cardRef.current?.getBoundingClientRect().y as number,
    });
  }, []);

  useEffect(() => {
    const checkClickLocation = (e: any) => {
      if (cardRef.current && cardRef.current.contains(e.target)) {
        setIsClicked(true);
        if (!(detailRef.current && detailRef.current.contains(e.target))) {
          setMouseCoords({
            x: e.clientX,
            y: e.clientY,
          });
        }
      } else {
        setIsClicked(false);
      }
    };

    window.addEventListener("mousedown", checkClickLocation);
    return () => {
      window.removeEventListener("mousedown", checkClickLocation);
    };
  }, [cardRef, detailRef]);

  return (
    <div ref={cardRef} className={Style.streamButton}>
      <div>{`${item.datetime
        .getHours()
        .toString()
        .padStart(2, "0")}:${item.datetime
        .getMinutes()
        .toString()
        .padStart(2, "0")}~`}</div>
      <div>{item.title}</div>
      <dl
        ref={detailRef}
        className={Style.streamDetails}
        style={{
          top:
            coords.y + 200 > windowSize.height
              ? windowSize.height - 200
              : coords.y,
          left:
            coords.x + 405 > windowSize.width
              ? windowSize.width - 405
              : coords.x,
          opacity: isClicked ? 1 : 0,
          transform: isClicked ? "scale(1)" : "scale(0)",
        }}
      >
        <dt>開始時間</dt>
        <dd>{`${item.datetime
          .getHours()
          .toString()
          .padStart(2, "0")}:${item.datetime
          .getMinutes()
          .toString()
          .padStart(2, "0")}~`}</dd>
        <dt>題名</dt>
        <dd>{item.title}</dd>
        <dt>ゲーム</dt>
        <dd>{item.game}</dd>
        <dt>配信場所</dt>
        <dd>
          <ul className={Style.platformList}>
            {item.platform.map((p) => {
              return (
                <li key={`platform_${p.name}_${Math.random()}`}>
                  {p.icon && (
                    <a
                      href={p.url}
                      target="_blank"
                      className={Style.socialsLink}
                    >
                      {p.icon}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </dd>
        {item.streamingWith && (
          <>
            <dt>コラボ</dt>
            <dd>
              <ul className={Style.streamWithList}>
                {item.streamingWith.map((u) => {
                  return (
                    <li>
                      <a
                        href={u.socials ? u.socials.at(0)?.url : ""}
                        target="_blank"
                      >
                        {u.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </dd>
          </>
        )}
      </dl>
    </div>
  );
};

export default StreamButton;
