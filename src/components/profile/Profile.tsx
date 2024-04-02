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

export default function Profile() {
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
