import React, { useEffect, useState } from "react";
import type Menu from "@kiosk/common/types/menu";
import { getAllProductsWithMenu } from "@apis/product";
import ProductList from "@components/product/ProductList";
import Navigator from "@components/navigator";
import { ContainerDiv } from "./index.style";

const Product: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(-1);
  const [menus, setMenus] = useState<Menu[]>([]);
  const menu = menus.find((menu) => (menu?.id || -2) === selectedId) || { id: -1, name: "" };

  useEffect(() => {
    (async () => {
      const menus = await getAllProductsWithMenu();
      setMenus(menus);
      setSelectedId(menus[0].id || 0);
    })();
  }, []);

  return (
    <ContainerDiv>
      <Navigator menus={menus} setMenu={setSelectedId} />
      <ProductList menu={menu} />
    </ContainerDiv>
  );
};

export default Product;