import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headercomp from "./Headercomp";
import Maincentent from "./Maincentent";

function App() {
  return (
    <>
      <Headercomp></Headercomp>
      <Maincentent></Maincentent>
    </>
  );
}

export default App;
