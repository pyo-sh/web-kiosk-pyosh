import React from "react";
import { backgroundStyle, modalStyle } from "./Modal.style";

interface ModalPropsType {
  children: any;
  isOpen: boolean;
  hasBackground?: boolean;
  zIndex?: number;
}

const Modal: React.FunctionComponent<ModalPropsType> = ({
  children,
  isOpen,
  hasBackground = true,
  zIndex = 10,
}): React.ReactElement => {
  if (!isOpen) return <></>;

  if (!hasBackground) return <div className={modalStyle({ zIndex })}>{children}</div>;

  return (
    <>
      <div className={backgroundStyle({ zIndex })}></div>
      <div className={modalStyle({ zIndex: zIndex + 1 })}>{children}</div>
    </>
  );
};

export default Modal;
