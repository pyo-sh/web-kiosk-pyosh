import { useRef } from "react";

const MAX_BOUNCE_MOVEMENT = 3;

interface UseDraggablePropsType<T extends HTMLElement> {
  handleDrag?: (event: React.MouseEvent<T>) => void;
  handleClick?: (event: React.MouseEvent<T>) => void;
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

const useDraggable = <T extends HTMLElement>({
  handleDrag,
  handleClick,
}: UseDraggablePropsType<T>) => {
  const dragController = useRef<DragControllerType>({ ...initialController }).current;

  const setControllerReady = () => {
    dragController.bouncing = 0;
    dragController.isActive = false;
    dragController.isDragging = false;
  };

  const onMouseDown: React.MouseEventHandler<T> = () => {
    dragController.isActive = true;
  };

  const onMouseMove: React.MouseEventHandler<T> = (e) => {
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

    if (isDragging && handleDrag) {
      handleDrag(e);
    }
  };

  const onMouseUp: React.MouseEventHandler<T> = (e) => {
    const { isDragging } = dragController;

    if (!isDragging && handleClick) {
      handleClick(e);
    }

    setControllerReady();
  };

  const onMouseLeave: React.MouseEventHandler<T> = setControllerReady;

  return [onMouseDown, onMouseMove, onMouseUp, onMouseLeave];
};

export default useDraggable;
