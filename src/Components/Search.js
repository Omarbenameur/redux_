import React from "react";
const Search = ({ handleChange, todo }) => {
  return (
    <div className="sea">
      <label className="sear">
        {" "}
        <h1> Search </h1>{" "}
      </label>
      <br />
      <input
        type="text"
        onChange={handleChange}
        value={todo}
        className="seaa"
      />
    </div>
  );
};

export default Search;
