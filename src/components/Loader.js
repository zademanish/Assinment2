import React from "react";
import SearchBar from "./SearchBar";
const Loaders = () => {
  return (
    <div className="bg-[#000000c5] p-4 h-screen">
      <SearchBar/>
    <div className="flex items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-t-4 border-white"></div>
        <h2 className="text-3xl text-white">Loading...</h2>
    </div>
    </div>
  );
};

export default Loaders;

