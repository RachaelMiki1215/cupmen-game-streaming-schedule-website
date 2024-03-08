import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import * as Styles from "./CopyButton.module.css";

interface Props {
  children: React.ReactNode | string;
  buttonClassName?: string;
  contentsToCopy?: any;
}

const CopyButton: React.FC<Props> = ({
  children,
  buttonClassName,
  contentsToCopy,
}: Props) => {
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(contentsToCopy);
      console.log("[INFO] Content copied to clipboard.");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={copyContent}
      className={`${Styles.button} ${buttonClassName}`}
    >
      <div className={Styles.overlay}>
        <FontAwesomeIcon icon={faClipboard} />
      </div>
      <div className={Styles.contentDisplay}>{children}</div>
    </button>
  );
};

export default CopyButton;
