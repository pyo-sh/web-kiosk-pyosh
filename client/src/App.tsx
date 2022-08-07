import React from "react";
import "@src/Global.style";
import { Router, Route } from "@hooks/router";
import Order from "@pages/Order";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Order} />
    </Router>
  );
};

export default App;
