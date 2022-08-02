import React, { useRef } from "react";
import {
  navContainerStyle,
  navStyle,
  titleStyle,
  controllerStyle,
  navListStyle,
} from "./index.style";

const dummyData = [1, 2, 3, 4, 5];

const Navigator: React.FC = ({}) => {
  const $navList = useRef<HTMLUListElement>(null);
  const isClickPrevented = useRef<boolean>(true);
  const isDragging = useRef<boolean>(false);

  const onMouseDownList: React.MouseEventHandler<HTMLUListElement> = () => {
    isClickPrevented.current = false;
  };

  const onMouseMoveList: React.MouseEventHandler<HTMLUListElement> = ({ movementX }) => {
    // Detect Drag
    if (!isClickPrevented.current) {
      isDragging.current = true;
    }
    // Prevent Click
    isClickPrevented.current = true;
    // Dragging
    if (isDragging.current && $navList.current) {
      $navList.current.scrollLeft -= movementX * 2;
    }
  };

  const onMouseUpList: React.MouseEventHandler<HTMLUListElement> = (e) => {
    if (isDragging.current) {
      console.log("drag");
    } else {
      console.log("click");
    }
    isClickPrevented.current = true;
    isDragging.current = false;
  };

  const onMouseLeaveList: React.MouseEventHandler<HTMLUListElement> = () => {
    isClickPrevented.current = true;
    isDragging.current = false;
  };

  return (
    <header className={navContainerStyle}>
      <h1 className={titleStyle}>주문</h1>
      <nav className={navStyle}>
        <button className={controllerStyle}></button>
        <ul
          ref={$navList}
          className={navListStyle}
          onMouseDown={onMouseDownList}
          onMouseMove={onMouseMoveList}
          onMouseUp={onMouseUpList}
          onMouseLeave={onMouseLeaveList}
        >
          {dummyData.map((item) => (
            <li key={`nav-${item}`}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigator;
