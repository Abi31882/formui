import { FC } from "react";
import Header from "../Header/Header";
import data from "../data/data.json";
import "./CarrierSettings.css";

interface Props {}

const CarrierSettings: FC<Props> = () => {
  return (
    <div className="Carrier">
      <Header Header="Carrier Settings" classname="CarrierHeader" />
      <p className="borderCarrier"></p>
      <div>
        <Header Header="Carrier 1 ID" classname="Carrier-1-ID" />
        <input className="input1" value={data.CarrierID1} />
      </div>
      <div>
        <Header Header="Carrier 2 ID" classname="Carrier-2-ID" />
        <input className="input2" value={data.CarrierID2} />
      </div>
    </div>
  );
};

export default CarrierSettings;
