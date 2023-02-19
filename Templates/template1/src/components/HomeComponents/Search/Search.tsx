import React from "react";
import * as S from "./style";

//icons
import { RiListSettingsLine } from "react-icons/ri";

interface SearchProps {}

const Search = ({}: SearchProps) => {
  return (
    <S.StyledSearch>
      <input type="search" placeholder="Search.." />
      <button type="submit">
        {<RiListSettingsLine size={25} color="#fff" />}
      </button>
    </S.StyledSearch>
  );
};

export default Search;
