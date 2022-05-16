import { FC } from "react";
import Form from "../Form/Form";
import SideBar from "../Sidebar/Sidebar";
import "./Main.css";

interface Props {}

const Main: FC<Props> = () => {
  return (
    <div className="Flex">
      <SideBar />
      <Form />
    </div>
  );
};

export default Main;
