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

  const contextValues = {
    text,
    setText,
    sorting,
    setSort,
  };

  return (
    <>
      <SearchContext.Provider value={contextValues}>
        <Navigation setText={setText} setSort={setSort}></Navigation>
        <All></All>
      </SearchContext.Provider>
    </>
  );
}

export default App;
