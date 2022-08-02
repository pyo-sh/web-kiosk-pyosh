import { useRef } from "react";

const MAX_BOUNCE_MOVEMENT = 3;

interface UseDraggablePropsType {
  handleDrag: (event: React.MouseEvent<HTMLUListElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLUListElement>) => void;
}

interface DragControllerType {
  bouncing: number;
  isActive: boolean;
  isDragging: boolean;
}

const initialController = {
  bouncing: 0,
  isActive: false,
  isDragging: false,
};

const useDraggable = ({ handleDrag, handleClick }: UseDraggablePropsType) => {
  const dragController = useRef<DragControllerType>({ ...initialController }).current;

  const setControllerReady = () => {
    dragController.bouncing = 0;
    dragController.isActive = false;
    dragController.isDragging = false;
  };

  const onMouseDown: React.MouseEventHandler<HTMLUListElement> = () => {
    dragController.isActive = true;
  };

  const onMouseMove: React.MouseEventHandler<HTMLUListElement> = (e) => {
    const { bouncing, isActive, isDragging } = dragController;

    if (isActive) {
      dragController.bouncing += 1;
    }

    const isDrag = bouncing > MAX_BOUNCE_MOVEMENT;
    if (isActive && isDrag) {
      dragController.bouncing = 0;
      dragController.isActive = false;
      dragController.isDragging = true;
    }

    if (isDragging) {
      handleDrag(e);
    }
  };

  const onMouseUp: React.MouseEventHandler<HTMLUListElement> = (e) => {
    const { isDragging } = dragController;

    if (!isDragging) {
      handleClick(e);
    }

    setControllerReady();
  };

  const onMouseLeave: React.MouseEventHandler<HTMLUListElement> = setControllerReady;

  return [onMouseDown, onMouseMove, onMouseUp, onMouseLeave];
};

export default useDraggable;
