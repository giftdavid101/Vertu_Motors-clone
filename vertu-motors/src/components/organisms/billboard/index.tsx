import React from "react";
import "./billboard.scss";
import Switch from "../../atom/switch";

const features = [
  {
    id: 1,
    img: "https://www.vertumotors.com/custom/96640.png",
    text: "% of customers would recommend us",
  },
  {
    id: 2,
    img: "https://www.vertumotors.com/custom/105306.png",
    text: "14 day money-back guarantee on all used cars",
  },
  {
    id: 3,
    img: "https://www.vertumotors.com/custom/105307.png",
    text: "14 day money-back guarantee on all used cars",
  },
];
const Billboard = () => {
  return (
    <div className={"bill-board"}>
      <>
        {features.map((el: any) => (
          <div>
            <img src={el.img} alt={"features"} />
            <p>{el.text}</p>
          </div>
        ))}
      </>

      <h1>billboard</h1>
      <Switch />
      <div className={"billboard"}></div>
    </div>
  );
};

export default Billboard;
