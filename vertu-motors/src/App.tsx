import React from "react";
import "./App.scss";
import Index from "./components/organisms/header";
import Billboard from "./components/organisms/billboard";

function App() {
  return (
    <div className="App">
      <Index />
      <div className={"container"}>App</div>
      <Billboard />
    </div>
  );
}

export default App;
