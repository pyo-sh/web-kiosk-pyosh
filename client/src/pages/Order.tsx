import React, { useEffect, useState } from "react";
import Navigator from "@components/navigator";
import { getAllProductsWithMenu } from "@apis/product";
import Menu from "@kiosk/common/types/menu";

const Order: React.FC = () => {
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
    <div>
      <Navigator menus={menus} setMenu={setSelectedId} />
      <div>{menu.name}</div>
    </div>
  );
};

export default Order;
