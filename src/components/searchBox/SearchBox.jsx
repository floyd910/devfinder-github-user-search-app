import { useRef } from "react";

import searchIcon from "../../assets/icon-search.svg";
import "./SearchBox.css";

export default function SearchBox({ getUserData, error }) {
  const searchWord = useRef();
  console.log(error);
  return (
    <div className="search-box">
      <img src={searchIcon} alt="Search icon" />
      <input
        ref={searchWord}
        type="text"
        placeholder="Search GitHub username…"
      />
      {error && error.message === "Not Found" && (
        <p className="no-results">No results</p>
      )}
      <button onClick={() => getUserData(searchWord.current.value)}>
        Search
      </button>
    </div>
  );
}
