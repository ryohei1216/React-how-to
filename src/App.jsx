import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShoeFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setfaceShowFlag(true);
    } else {
      faceShowFlag && setfaceShowFlag(false);
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>abc</h1>
      <ColorfulMessage color="blue">ogenkidesuka</ColorfulMessage>
      <ColorfulMessage color="orange">yes</ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <br />
      <button onClick={onClickSwitchShoeFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p> ^^</p>}
    </React.Fragment>
  );
};

export default App;
