import React from "react";
import * as S from "./style";

interface SearchProps {}

const Search = ({}: SearchProps) => {
  return (
    <S.StyledSearch>
      <input type="search" placeholder="Search.." />
      <button type="submit">reactIcon</button>
    </S.StyledSearch>
  );
};

export default Search;
