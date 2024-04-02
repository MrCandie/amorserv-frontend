import { Avatar, Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { useContext } from "react";
import { AuthContext } from "../../util/context";

export default function Header({ title }: { title: string }) {
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const ctx = useContext(AuthContext);
  return (
    <>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
      <Flex
        w="100%"
        borderBottom="1px solid #ccc"
        align="center"
        justify="space-between"
        p="1rem"
        boxShadow="sm"
      >
        <Flex align="center" gap="1rem">
          <Button
            onClick={onOpen}
            display={{ lg: "none", md: "block", base: "block" }}
            size="xs"
            bg="#fff"
          >
            <AiOutlineMenu color="#333" size={16} />
          </Button>
          <Heading
            fontSize={{ lg: 18, md: 17, base: 16 }}
            color="#222"
            fontWeight="medium"
          >
            {title}
          </Heading>
        </Flex>
        <Avatar
          cursor="pointer"
          onClick={() => navigate("/profile")}
          size="sm"
          name={ctx?.user?.name}
        />
      </Flex>
    </>
  );
}
