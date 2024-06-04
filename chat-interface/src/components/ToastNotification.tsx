import React from "react";
import {
  ToastContainer,
  ToastPosition,
  toast,
  ToastOptions,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const positionMap: { [key: string]: ToastPosition } = {
  tc: "top-center",
  tl: "top-left",
  tr: "top-right",
  bc: "bottom-center",
  bl: "bottom-left",
  br: "bottom-right",
};

type ToastType = "default" | "success" | "error" | "warn" | "info";

export const notify = (type: ToastType, pos: string, message: string) => {
  const position = positionMap[pos] || "bottom-right";

  const options: ToastOptions = { position };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "warn":
      toast.warn(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      toast(message, options);
  }
};

const ToastNotification: React.FC = () => {
  return <ToastContainer />;
};

export default ToastNotification;
