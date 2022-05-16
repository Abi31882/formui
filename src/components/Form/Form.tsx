import { FC } from "react";
import CarrierSettings from "../CarrierSettings/CarrierSettings";
import data from "../data/data.json";
import Header from "../Header/Header";
import "./Form.css";

interface Props {}

const Form: FC<Props> = () => {
  return (
    <div className="Form">
      <Header Header="User Settings" classname="inputHeadings" />
      <p className="border"></p>
      <div className="FlexCol">
        <Header Header="Name" classname="NameText" />
        <input className="input" value={data.Name} />
      </div>

      <div className="FlexCol">
        <Header Header="Email" classname="EmailText" />
        <input className="input" value={data.Email} />
      </div>
      <CarrierSettings />
    </div>
  );
};

export default Form;
