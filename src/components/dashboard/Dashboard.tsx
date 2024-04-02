import { Flex, Heading, Text } from "@chakra-ui/react";
import Wrapper from "../reusables/Wrapper";
import SubHeader from "./SubHeader";
import BookList from "./BookList";
import { useEffect, useState } from "react";
import { listBooks } from "../../util/http";
import Loader from "../reusables/Loader";
import ReusableSkeleton from "../reusables/ReusableSkeleton";

export default function Dashboard() {
  const [list, setList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setLoading(true);
        setProgress(20);
        setProgress(40);
        setProgress(60);
        const res = await listBooks();
        setList(res?.data);
      } catch (error) {
        console.log(error);
      }
      setProgress(80);
      setProgress(100);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
      <Wrapper title="Home">
        <Flex w="100%" align="start" direction="column" gap="1rem">
          <SubHeader />
          <Flex w="100%" align="start" direction="column" gap="1rem">
            <Heading
              fontSize={{ lg: 16, md: 15, base: 14 }}
              color="#333"
              fontWeight="medium"
              textTransform="capitalize"
            >
              Hello candie
            </Heading>
            <Text
              fontSize={{ lg: 18, md: 18, base: 16 }}
              color="brand.100"
              fontWeight="bold"
              textTransform="capitalize"
            >
              recommended for you
            </Text>
            {loading ? <ReusableSkeleton /> : <BookList list={list} />}
          </Flex>
        </Flex>
      </Wrapper>
    </>
  );
}
