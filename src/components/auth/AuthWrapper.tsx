import { Flex, Heading } from "@chakra-ui/react";
import ImageComponent from "../reusables/Image";

export default function AuthWrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Flex w="100%" h="100vh" position="relative">
      <ImageComponent src="/bg.jpg" alt="auth" height="100vh" />

      <Flex
        position="absolute"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        top="0"
        left="0"
      >
        <Flex
          w={{ lg: "30%", md: "40%", base: "90%" }}
          bg="#fff"
          borderRadius={10}
          align="center"
          direction="column"
          p="1rem"
          gap="1rem"
        >
          <Heading
            fontSize={{ lg: 18, md: 17, baese: 16 }}
            color="#333"
            fontWeight="bold"
          >
            {title}
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
