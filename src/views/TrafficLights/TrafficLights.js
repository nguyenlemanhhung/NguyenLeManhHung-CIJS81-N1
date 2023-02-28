import { useState } from "react";
import "./TrafficLights.css";

function TrafficLights() {
  const [lightColor, setLightColor] = useState([
    {
      id: 1,
      color: "red",
      status: "on",
    },
    {
      id: 2,
      color: "green",
      status: "",
    },
    {
      id: 3,
      color: "yellow",
      status: "",
    },
  ]);
  const [count, setCount] = useState(1);
  const changeColor = () => {
    let next = count;
    if (next > 2) {
      next = 1;
    } else {
      next += 1;
    }
    setCount(next);
    // console.log("next: " + next, count);
    setLightColor(
      lightColor.map((item) => {
        if (item.id === next) {
          item.status = "on";
        } else {
          item.status = "off";
        }
        return item;
      })
    );
  };

  return (
    <div className="container">
      <div className="traffic-lights">
        {lightColor.map((item, index) => (
          <div
            key={index}
            className="light"
            style={{
              backgroundColor:
                item.status === "on" ? `${item.color}` : "#cecece",
            }}
          ></div>
        ))}
      </div>
      <button onClick={changeColor}>Next</button>
    </div>
  );
}
export default TrafficLights;
