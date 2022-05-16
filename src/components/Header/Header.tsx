import { FC } from "react";
import "./Header.css";

interface Props {
  Header: string;
  classname: string;
}

const Header: FC<Props> = ({ Header, classname }) => {
  return <div className={classname}>{Header}</div>;
};

export default Header;
