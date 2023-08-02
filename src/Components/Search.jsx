import { useContext } from "react";
import { SearchContext } from "../App";
const Search = ({setText}) => {

    const contextValues = useContext(SearchContext);

  return (
    <label
      class="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
      for="search-bar"
    >
      <input
        id="search-bar"
        placeholder="Search here"
        name="q"
        value={contextValues.text}
        onChange={(e) => setText(e.target.value)}
        class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
        required=""
      />
    </label>
  );
};

export default Search;
