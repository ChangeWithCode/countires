import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import All from "./Components/Countries/All";

export const SearchContext = createContext();

function App() {

  const [text, setText] = useState("");
  const [sorting, setSort] = useState("asc");
  const [continents, setContinents] = useState("asia");

  const contextValues = {
    text,
    setText,
    sorting,
    setSort,
    continents,
    setContinents
  };

  return (
    <>
      <SearchContext.Provider value={contextValues}>
        <Navigation setText={setText} setSort={setSort} setContinents = {setContinents}></Navigation>
        <All></All>
      </SearchContext.Provider>
    </>
  );
}

export default App;
