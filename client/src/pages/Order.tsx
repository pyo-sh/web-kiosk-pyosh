import React, { useEffect, useState } from "react";
import Navigator from "../components/navigator";

const Order: React.FC = () => {
  const [menu, setMenu] = useState<string>("");
  const [menus, setMenus] = useState<Array<string>>([]);

  useEffect(() => {
    const dummyData = ["하나", "둘", "셋", "넷", "다섯"];
    setMenus(dummyData);
    setMenu(dummyData[0]);
  }, []);

  return (
    <div>
      <Navigator menus={menus} setMenu={setMenu} />
      <div>{menu}</div>
    </div>
  );
};

export default Order;
