import { useEffect, useState } from "react";
import BookList from "../dashboard/BookList";
import SearchInput from "../reusables/SearchInput";
import Wrapper from "../reusables/Wrapper";
import Filter from "./Filter";
import { listBooks, listCategories } from "../../util/http";
import Loader from "../reusables/Loader";
import ReusableSkeleton from "../reusables/ReusableSkeleton";
import { IBook, ICategory } from "../../constants/interface";

export default function Search() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setProgress(20);
        setProgress(40);
        setProgress(60);
        const res = await listBooks();
        if (filter === "all") {
          setList(res?.data);
        } else {
          const filtered = res?.data?.filter(
            (el: IBook) => el.category.toLowerCase() === filter.toLowerCase()
          );
          setList(filtered);
        }
      } catch (error) {
        console.log(error);
      }
      setProgress(80);
      setProgress(100);
      setLoading(false);
    }
    fetchData();
  }, [filter]);

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(20);
        setProgress(40);
        setProgress(60);
        const res = await listCategories();
        setCategories(res?.data?.map((el: ICategory) => el.name));
      } catch (error) {
        console.log(error);
      }
      setProgress(80);
      setProgress(100);
    }
    fetchData();
  }, []);

  async function searchHandler() {
    const val = value.trim().toLowerCase();
    try {
      setLoading(true);
      setLoading(true);
      setProgress(20);
      setProgress(40);
      setProgress(60);
      const res = await listBooks();
      const filtered = res.data.filter(
        (el: IBook) =>
          el.name.toLowerCase().includes(val) ||
          el.author.toLowerCase().includes(val)
      );
      setList(filtered);
    } catch (error) {
      console.log(error);
    }
    setProgress(80);
    setProgress(100);
    setLoading(false);
  }

  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
      <Wrapper title="Search">
        <SearchInput
          value={value}
          setValue={setValue}
          placeholder="Search Books, author, title"
          onClick={searchHandler}
          loading={loading}
        />
        <Filter categories={categories} setFilter={setFilter} filter={filter} />
        {loading ? <ReusableSkeleton /> : <BookList list={list} />}
      </Wrapper>
    </>
  );
}
