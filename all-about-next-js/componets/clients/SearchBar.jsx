"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchQ, setSearchQ] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("farrukh");
    console.log(searchQ);
  };
  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => setSearchQ(e.target.value)}
        placeholder="search...."
      />
      <button>submit</button>
    </form>
  );
};

export default SearchBar;
