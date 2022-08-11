import React, { useEffect, useState } from "react";
import type Menu from "@kiosk/common/types/menu";
import { getAllProductsWithMenu } from "@apis/product";
import ProductList from "@components/product/ProductList";
import Navigator from "@components/navigator";
import { ContainerDiv, MenuWrapperDiv } from "./index.style";

const Product: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    (async () => {
      const menus = await getAllProductsWithMenu();
      setMenus(menus);
      setSelectedIndex(0);
    })();
  }, []);

  return (
    <ContainerDiv>
      <Navigator menus={menus} setMenu={setSelectedIndex} />
      <MenuWrapperDiv selectedIndex={selectedIndex}>
        {menus.map((menu) => {
          const { id: menuId } = menu;
          return <ProductList key={`product-list-${menuId}`} menu={menu} />;
        })}
      </MenuWrapperDiv>
    </ContainerDiv>
  );
};

export default Product;
