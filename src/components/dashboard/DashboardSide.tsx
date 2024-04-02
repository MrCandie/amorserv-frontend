import { Box, Flex } from "@chakra-ui/react";
import ImageComponent from "../reusables/Image";
import NavItem from "../reusables/NavItem";
import { FaHome, FaUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
// import { MdOutlineCloudUpload } from "react-icons/md";

const list = [
  { title: "home", icon: <FaHome />, path: "/" },
  { title: "search", icon: <BsSearch />, path: "/search" },
  { title: "Profile", icon: <FaUser />, path: "/profile" },
  // { title: "My uploads", icon: <MdOutlineCloudUpload />, path: "/uploads" },
];

export default function DashboardSide() {
  const navigate = useNavigate();
  return (
    <Flex
      w="18%"
      align="start"
      justify="start"
      direction="column"
      gap="1rem"
      borderRight="1px solid #ccc"
      h="100vh"
      px="1.5rem"
      display={{ lg: "flex", md: "none", base: "none" }}
    >
      <Box w="150px" mx="auto">
        <ImageComponent src="/logo.png" alt="logo" fit="contain" />
      </Box>
      <Flex w="100%" align="start" direction="column">
        {list.map((el) => (
          <NavItem icon={el.icon} title={el.title} path={el.path} />
        ))}
      </Flex>
      <Flex
        onClick={() => navigate("/login")}
        color="red"
        fontWeight="normal"
        cursor="pointer"
        className="menu"
      >
        <TbLogout color="red" />
        Logout
      </Flex>
    </Flex>
  );
}
