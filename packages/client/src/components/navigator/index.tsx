import React, { useRef } from "react";
import {
  navContainerStyle,
  navStyle,
  titleStyle,
  controllerStyle,
  navListStyle,
} from "./index.style";

const MAX_BOUNCE_MOVEMENT = 3;

interface NavigatorPropsType {
  menus: Array<string>;
  setMenu: React.Dispatch<React.SetStateAction<string>>;
}

const Navigator: React.FC<NavigatorPropsType> = ({ menus, setMenu }) => {
  const $navList = useRef<HTMLUListElement>(null);
  const moveCounter = useRef<number>(0);
  const isClickPrevented = useRef<boolean>(true);
  const isDragging = useRef<boolean>(false);

  const onMouseDownList: React.MouseEventHandler<HTMLUListElement> = () => {
    isClickPrevented.current = false;
  };

  const onMouseMoveList: React.MouseEventHandler<HTMLUListElement> = ({ movementX }) => {
    // Detect Drag
    if (!isClickPrevented.current) {
      moveCounter.current += 1;
      console.log(moveCounter.current);

      if (moveCounter.current > MAX_BOUNCE_MOVEMENT) {
        moveCounter.current = 0;
        // Prevent Click & Drag
        isClickPrevented.current = true;
        isDragging.current = true;
      }
    }
    // Dragging
    if (isDragging.current && $navList.current) {
      $navList.current.scrollLeft -= movementX * 2;
    }
  };

  const onMouseUpList: React.MouseEventHandler<HTMLUListElement> = ({ target }) => {
    if (!isDragging.current && target) {
      const { id } = target as HTMLElement;
      setMenu(id);
    }
    isClickPrevented.current = true;
    isDragging.current = false;
    moveCounter.current = 0;
  };

  const onMouseLeaveList: React.MouseEventHandler<HTMLUListElement> = () => {
    isClickPrevented.current = true;
    isDragging.current = false;
    moveCounter.current = 0;
  };

  return (
    <header className={navContainerStyle}>
      <h1 className={titleStyle}>주문</h1>
      <nav className={navStyle}>
        <button className={controllerStyle}></button>
        <ul
          id={"Navigate-Menu"}
          ref={$navList}
          className={navListStyle}
          onMouseDown={onMouseDownList}
          onMouseMove={onMouseMoveList}
          onMouseUp={onMouseUpList}
          onMouseLeave={onMouseLeaveList}
        >
          {menus.map((item) => (
            <li id={item} key={`nav-${item}`}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigator;
