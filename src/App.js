import React from "react";
import Dropdown from "./components/DropDown";

const items = [
  { label: "Yes", value: "Yes" },
  { label: "Probably Not", value: "Probably Not" }
];

function App() {
  return (
    <div className="App">
      <h3 style={{ paddingTop: "20px" }}>Should You Use a DropDown ?</h3>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
