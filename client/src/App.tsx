import React from "react";
import "@src/Global.style";
import { Router, Route } from "@hooks/router";
import Order from "@pages/Order";
import useMediaQuery, { MediaContext } from "@hooks/useMediaQuery";
import { ScreenQuery } from "@constants/screen";

const App: React.FC = () => {
  const isMobile = useMediaQuery(ScreenQuery.mobile);

  return (
    <MediaContext.Provider value={isMobile}>
      <Router>
        <Route path="/" component={Order} />
      </Router>
    </MediaContext.Provider>
  );
};

export default App;
