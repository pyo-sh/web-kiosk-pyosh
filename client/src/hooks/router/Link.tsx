import React from "react";
import useHistory from "./history";

interface LinkPropsType {
  children?: React.ReactNode;
  to: string;
}

const Link: React.FC<LinkPropsType> = ({ children, to }) => {
  const history = useHistory();
  // 컨택스트를 사용한다.
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    history.push(to);
  };

  // 링크 엘리먼트를 반환한다.
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
