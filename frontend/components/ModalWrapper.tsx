import { ReactNode } from "react";
import style from "./ModalWrapper.module.scss";

interface ModalWrapperProps {
  children: ReactNode;
}

export default function ModalWrapper({ children }: ModalWrapperProps) {
  return <div className={style.container}>{children}</div>;
}
