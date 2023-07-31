import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import All from "./Components/Countries/All";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <All></All>
    </>
  );
}

export default App;
