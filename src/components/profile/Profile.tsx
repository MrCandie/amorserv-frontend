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
import { useContext, useEffect } from "react";
import { AuthContext } from "../../util/context";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!ctx.token || !ctx.user) {
      navigate("/login");
    }
  }, [ctx]);
  return (
    <Wrapper title="Profile">
      <Flex w={{ lg: "35%", md: "45%", base: "100%" }} shadow="lg" bg="#fff">
        <Tabs w="100%">
          <TabList>
            <Tab w="50%">Profile</Tab>
            <Tab w="50%">Uploads</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <UserDetails />
            </TabPanel>
            <TabPanel>
              <Upload />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Wrapper>
  );
}
