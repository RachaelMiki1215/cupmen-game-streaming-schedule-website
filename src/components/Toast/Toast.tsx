import React from "react";
import * as Styles from "./Toast.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleQuestion,
  faCircleXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

// TODO: Finish this up.

enum NotificationType {
  Info = 0,
  Warning = 1,
  Error = 2,
  Question = 3,
}

interface ToastProps {
  messageType?: NotificationType;
  children?: React.ReactNode;
  toastClassName?: string;
}

const Toast: React.FC<ToastProps> = ({
  messageType,
  children,
  toastClassName,
}: ToastProps) => {
  let messageIcon;
  switch (messageType) {
    case NotificationType.Info:
      messageIcon = (
        <FontAwesomeIcon
          icon={faCircleInfo}
          className={Styles.icon}
          style={{ color: "#135976" }}
        />
      );
      break;
    case NotificationType.Warning:
      messageIcon = (
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className={Styles.icon}
          style={{ color: "#E0AC2E" }}
        />
      );
      break;
    case NotificationType.Error:
      messageIcon = (
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={Styles.icon}
          style={{ color: "#E1615F" }}
        />
      );
      break;
    case NotificationType.Question:
      messageIcon = (
        <FontAwesomeIcon
          icon={faCircleQuestion}
          className={Styles.icon}
          style={{ color: "#8863E0" }}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className={`${Styles.container} ${toastClassName}`}>
      {messageIcon}
      {children}
    </div>
  );
};

export default Toast;
export { NotificationType };
