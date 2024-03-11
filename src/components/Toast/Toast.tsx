import React from "react";
import * as Styles from "./Toast.module.css";

// TODO: FInish this up.

enum NotificationType {
    Info = 0,
    Warning = 1,
    Error = 2
}

interface ToastProps {
    messageType?: NotificationType;
    children?: React.ReactNode;
}

const Toast : React.FC<ToastProps> = ({messageType, children} : ToastProps) => {

    return <div>
        {children}
    </div>
}