import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import * as Styles from "./CopyButton.module.css";
import { createPortal } from "react-dom";
import Toast, { NotificationType } from "../Toast/Toast";

interface Props {
  children: React.ReactNode | string;
  buttonClassName?: string;
  contentsToCopy: string;
}

// TODO: Figure out why this button isn't shrinking along with container size.
const CopyButton: React.FC<Props> = ({
  children,
  buttonClassName,
  contentsToCopy,
}: Props) => {
  const [isPageRendered, setIsPageRendered] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    setIsPageRendered(true);
  }, []);

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(contentsToCopy);
      console.log("[INFO] Content copied to clipboard.");

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <button
        onClick={copyContent}
        className={`${Styles.button} ${buttonClassName}`}
      >
        <div className={Styles.overlay}>
          <FontAwesomeIcon icon={faClipboard} />
        </div>
        <div className={Styles.contentDisplay}>{children}</div>
      </button>
      {isPageRendered &&
        createPortal(
          <Toast
            messageType={NotificationType.Info}
            toastClassName={`${Styles.toast} ${
              isCopied ? Styles.show : Styles.hide
            }`}
          >
            クリップボードにコピーされました📋
          </Toast>,
          document.getElementById("gatsby-focus-wrapper") as Element
        )}
    </>
  );
};

export default CopyButton;
