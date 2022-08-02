import React from "react";
import "./Global.style";
import appStyle from "./App.style";
import Navigator from "./components/navigator";

const App: React.FC = () => {
  return (
    <div className={appStyle}>
      <Navigator />
    </div>
  );
};

export default App;
