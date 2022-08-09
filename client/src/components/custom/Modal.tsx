import React from "react";
import reactDom from "react-dom";
import { BackgroundDiv, ContentDiv } from "./Modal.style";

interface ModalPropsType {
  children?: React.ReactNode;
  isOpen: boolean;
  closeModal?: () => void;
  hasBackground?: boolean;
  zIndex?: number;
}

const ModalPortal = ({ children }: { children?: React.ReactNode }) => {
  return reactDom.createPortal(children, document.body);
};

const Modal: React.FunctionComponent<ModalPropsType> = ({
  children,
  isOpen,
  closeModal,
  hasBackground = true,
  zIndex = 10,
}): React.ReactElement => {
  if (!isOpen) return <></>;

  if (!hasBackground) {
    return (
      <ModalPortal>
        <ContentDiv zIndex={zIndex}>{children}</ContentDiv>
      </ModalPortal>
    );
  }

  return (
    <ModalPortal>
      <BackgroundDiv onClick={closeModal} zIndex={zIndex} />
      <ContentDiv zIndex={zIndex}>{children}</ContentDiv>
    </ModalPortal>
  );
};

export default Modal;
