import React, { useRef } from "react";
import useDraggable from "@hooks/useDraggable";
import { ContainerHeader, TitleH1, MenuNav, ControlButton, MenuUL } from "./index.style";
import Menu from "@kiosk/common/types/menu";

interface NavigatorPropsType {
  menus: Menu[];
  setMenu: React.Dispatch<React.SetStateAction<number>>;
}

const Navigator: React.FC<NavigatorPropsType> = ({ menus, setMenu }) => {
  const listRef = useRef<HTMLUListElement>(null);

  const handleClickNav = ({ target }: React.MouseEvent<HTMLUListElement>) => {
    const id = (target as HTMLLIElement).getAttribute("data-index");
    if (id) {
      setMenu(Number(id));
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
    <ContainerHeader>
      <TitleH1>주문</TitleH1>
      <MenuNav>
        <ControlButton></ControlButton>
        <MenuUL
          id={"Navigate-Menu"}
          ref={listRef}
          onMouseDown={onMouseDownList}
          onMouseMove={onMouseMoveList}
          onMouseUp={onMouseUpList}
          onMouseLeave={onMouseLeaveList}
        >
          {menus.map((menu, index) => {
            const name = menu.name || "";
            return (
              <li data-index={index} key={`nav-${name}`}>
                {name}
              </li>
            );
          })}
        </MenuUL>
      </MenuNav>
    </ContainerHeader>
  );
};

export default Navigator;
