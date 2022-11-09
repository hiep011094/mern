import React, { useState } from "react";
import "./styles.scss";

const Search = ({ isSearch, handleIsSearch }) => {
  const [input, setInput] = useState({
    search: "",
  });

  const handleInput = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };

  return (
    <form
      className={isSearch ? "c-search active" : "c-search"}
      onClick={(e) => (e.target === e.currentTarget ? handleIsSearch() : false)}
    >
      <div className="c-search__inner">
        <div className="c-search__item">
          <input
            onChange={handleInput}
            type="text"
            className="search"
            name="search"
            value={input.search}
          />
        </div>
        <button className="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
