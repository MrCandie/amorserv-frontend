import Wrapper from "../reusables/Wrapper";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import UserDetails from "./UserDetails";
import Upload from "./Upload";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../util/context";
import { useNavigate } from "react-router-dom";
import { listMyBooks, viewProfile } from "../../util/http";
import Loader from "../reusables/Loader";
import { IBook } from "../../constants/interface";

export default function Profile() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [list, setList] = useState<Array<IBook>>([]);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState("");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(20);
        setProgress(40);
        setProgress(60);
        const res = await listMyBooks();
        setList(res?.data);
      } catch (error) {
        console.log(error);
      }
      setProgress(80);
      setProgress(100);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(20);
        setProgress(40);
        setProgress(60);
        const res = await viewProfile();
        setUser(res?.data);
      } catch (error) {
        console.log(error);
      }
      setProgress(80);
      setProgress(100);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!ctx.token || !ctx.user) {
      navigate("/login");
    }
  }, [ctx]);
  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
      <Wrapper title="Profile">
        <Flex w={{ lg: "35%", md: "45%", base: "100%" }} shadow="lg" bg="#fff">
          <Tabs w="100%">
            <TabList>
              <Tab w="50%">Profile</Tab>
              <Tab w="50%">Uploads</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <UserDetails user={user} />
              </TabPanel>
              <TabPanel>
                <Upload setList={setList} list={list} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Wrapper>
    </>
  );
}
