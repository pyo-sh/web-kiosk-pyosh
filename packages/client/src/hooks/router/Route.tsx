import { useContext } from "react";
import { RouterStateContext } from "./Router";

interface RoutePropsType {
  component: React.FC;
  path: string;
}

const Route = ({ component: Component, path }: RoutePropsType) => {
  const state = useContext(RouterStateContext);
  if (!state) throw new Error("Cannot find Router State");

  if (state.path !== path) return <></>;
  return <Component />;
};

export default Route;
