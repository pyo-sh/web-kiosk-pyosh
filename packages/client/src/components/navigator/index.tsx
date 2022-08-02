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
  return (
    <header className={navContainerStyle}>
      <h1 className={titleStyle}>주문</h1>
      <nav className={navStyle}>
        <button className={controllerStyle}></button>
        <ul className={navListStyle}>
          {dummyData.map((item) => (
            <li key={`nav-${item}`}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigator;
