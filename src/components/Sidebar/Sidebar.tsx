import { FC } from "react";
import Header from "../Header/Header";
import "./Sidebar.css";

interface Props {}

const SideBar: FC<Props> = (props: Props) => {
  return (
    <div className="topContainer">
      <Header classname="HeaderClassnames" Header={"SettingsPro"} />
    </div>
  );
};

export default SideBar;
