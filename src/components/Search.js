import React from "react";
import Wrapper from "./Wrapper";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Images</h2>
      <Wrapper searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
