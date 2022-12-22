import React from "react";
import "./App.scss";
import Header from "./components/organisms/header";
import Billboard from "./components/organisms/billboard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"container"}>App</div>
      <Billboard />
    </div>
  );
}

export default App;
