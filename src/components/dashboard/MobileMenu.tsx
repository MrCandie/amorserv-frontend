import { Box, Flex } from "@chakra-ui/react";
import ReusableDrawer from "../reusables/ReusableDrawer";
import ImageComponent from "../reusables/Image";
import NavItem from "../reusables/NavItem";
import { TbLogout } from "react-icons/tb";
import { FaHome, FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { ReactElement } from "react";
// import { MdOutlineCloudUpload } from "react-icons/md";

const list = [
  { title: "home", icon: <FaHome />, path: "/" },
  { title: "search", icon: <BsSearch />, path: "/search" },
  { title: "Profile", icon: <FaUser />, path: "/profile" },
  // { title: "My uploads", icon: <MdOutlineCloudUpload />, path: "/uploads" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  type?: string;
}) {
  return (
    <ReusableDrawer isOpen={isOpen} onClose={onClose}>
      <Flex w="100%" align="start" direction="column" gap="1rem">
        <Box w="150px" mx="auto">
          <ImageComponent src="/logo.png" alt="logo" fit="contain" />
        </Box>
        <Flex w="100%" align="start" direction="column">
          {list.map(
            (el: { title: string; path: string; icon: ReactElement }) => (
              <NavItem icon={el.icon} title={el.title} path={el.path} />
            )
          )}
        </Flex>
        <Flex color="red" fontWeight="normal" cursor="pointer" className="menu">
          <TbLogout color="red" />
          Logout
        </Flex>
      </Flex>
    </ReusableDrawer>
  );
}
