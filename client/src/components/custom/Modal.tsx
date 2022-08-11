import React from "react";
import reactDom from "react-dom";
import { BackgroundDiv, ContentDiv } from "./Modal.style";

interface ModalPropsType {
  refDom?: React.LegacyRef<HTMLDivElement>;
  onAnimationEnd?: () => void;
  children?: React.ReactNode;
  isOpen: boolean;
  closeModal?: () => void;
  hasBackground?: boolean;
  zIndex?: number;
  className?: string;
}

const ModalPortal = ({ children }: { children?: React.ReactNode }) => {
  return reactDom.createPortal(children, document.body);
};

const Modal: React.FunctionComponent<ModalPropsType> = ({
  refDom = null,
  onAnimationEnd = () => {},
  children,
  isOpen,
  closeModal,
  hasBackground = true,
  zIndex = 10,
  className = "",
}): React.ReactElement => {
  if (!isOpen) return <></>;

  if (!hasBackground) {
    return (
      <ModalPortal>
        <ContentDiv
          ref={refDom}
          onAnimationEnd={onAnimationEnd}
          className={className}
          zIndex={zIndex}
        >
          {children}
        </ContentDiv>
      </ModalPortal>
    );
  }

  return (
    <ModalPortal>
      <BackgroundDiv onClick={closeModal} zIndex={zIndex} />
      <ContentDiv
        ref={refDom}
        onAnimationEnd={onAnimationEnd}
        className={className}
        zIndex={zIndex}
      >
        {children}
      </ContentDiv>
    </ModalPortal>
  );
};

export default Modal;
