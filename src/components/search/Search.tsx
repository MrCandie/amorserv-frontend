import { useState } from "react";
import BookList from "../dashboard/BookList";
import SearchInput from "../reusables/SearchInput";
import Wrapper from "../reusables/Wrapper";
import Filter from "./Filter";

export default function Search() {
  const [value, setValue] = useState("");
  return (
    <Wrapper title="Search">
      <SearchInput
        value={value}
        setValue={setValue}
        placeholder="Search Books, author, title"
        onClick={() => {}}
      />
      <Filter />
      <BookList />
    </Wrapper>
  );
}
