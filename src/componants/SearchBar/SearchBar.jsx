import React from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

export const SearchBar = ({ onSubmit }) => {
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  };
  return (
    <>
      <SearchIcon className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        placeholder="Search a movie you may like"
        className={s.input}
      />
    </>
  );
};
