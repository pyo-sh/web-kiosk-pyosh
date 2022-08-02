import React, { useRef } from "react";
import {
  navContainerStyle,
  navStyle,
  titleStyle,
  controllerStyle,
  navListStyle,
} from "./index.style";

interface NavigatorPropsType {
  menus: Array<string>;
  setMenu: React.Dispatch<React.SetStateAction<string>>;
}

const Navigator: React.FC<NavigatorPropsType> = ({ menus, setMenu }) => {
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

  const onMouseUpList: React.MouseEventHandler<HTMLUListElement> = ({ target }) => {
    if (!isDragging.current && target) {
      const { id } = target as HTMLElement;
      setMenu(id);
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
