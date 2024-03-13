import React from "react";
import { useData } from "../context/DataContext";

const Search = () => {
  const {inputSearch,setInputSearch } = useData();
  return (
      <div className="flex items-center border-2 px-4 py-2 w-[317px] rounded-full bg-white justify-between gap-3">
        <input
          type="text"
          placeholder="search by name"
          className="text-lg outline-none w-full" 
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
        />
      </div>
  );
};

export default Search;
