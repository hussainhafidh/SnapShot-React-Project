import React from "react";
import Wrapper from "./Wrapper";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Wrapper searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
