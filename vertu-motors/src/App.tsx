import React, { useEffect, useState } from "react";
import "./App.scss";
import Index from "./components/organisms/header";
import Billboard from "./components/organisms/billboard";

function App(props: any) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
      <Index />
      <div className={"container"}>App</div>
      <Billboard />
    </div>
  );
}

export default App;
