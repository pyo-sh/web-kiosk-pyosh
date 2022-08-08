import React from "react";
import { BackgroundDiv, ContentDiv } from "./Modal.style";

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

  if (!hasBackground) return <ContentDiv zIndex={zIndex}>{children}</ContentDiv>;

  return (
    <>
      <BackgroundDiv zIndex={zIndex} />
      <ContentDiv zIndex={zIndex}>{children}</ContentDiv>
    </>
  );
};

export default Modal;
