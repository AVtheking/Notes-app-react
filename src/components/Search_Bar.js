import React from "react";
import { MdSearch } from "react-icons/md";
const Search = ({ handleSearchText }) => {
  return (
    <div className="search-container">
      <MdSearch className="search-icon" size="1.3em" />\
      <input
        onChange={(event) => handleSearchText(event.target.value)}
        className="search-input"
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};
export default Search;
