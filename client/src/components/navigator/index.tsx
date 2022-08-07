import React, { useRef } from "react";
import useDraggable from "@hooks/useDraggable";
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
  const listRef = useRef<HTMLUListElement>(null);

  const handleClickNav = ({ target }: React.MouseEvent<HTMLUListElement>) => {
    const id = (target as HTMLLIElement).getAttribute("data-id");
    if (id) {
      setMenu(id);
    }
  };

  const handleDragNav = ({ movementX }: React.MouseEvent<HTMLUListElement>) => {
    if (listRef.current) {
      listRef.current.scrollLeft -= movementX * 2;
    }
  };

  const [onMouseDownList, onMouseMoveList, onMouseUpList, onMouseLeaveList] = useDraggable({
    handleDrag: handleDragNav,
    handleClick: handleClickNav,
  });

  return (
    <header className={navContainerStyle}>
      <h1 className={titleStyle}>주문</h1>
      <nav className={navStyle}>
        <button className={controllerStyle}></button>
        <ul
          id={"Navigate-Menu"}
          ref={listRef}
          className={navListStyle}
          onMouseDown={onMouseDownList}
          onMouseMove={onMouseMoveList}
          onMouseUp={onMouseUpList}
          onMouseLeave={onMouseLeaveList}
        >
          {menus.map((item) => (
            <li data-id={item} key={`nav-${item}`}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigator;
