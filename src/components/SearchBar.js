import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name or email"
        className="w-full p-2 border rounded bg-[#ffffffe0] outline-none"
      />
    </div>
  );
};

export default SearchBar;

