import React from "react";
import "./Global.style";
import appStyle from "./App.style";
import Order from "./pages/Order";

const App: React.FC = () => {
  return (
    <div className={appStyle}>
      <Order />
    </div>
  );
};

export default App;
