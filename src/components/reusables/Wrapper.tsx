import { Flex } from "@chakra-ui/react";
import DashboardSide from "../dashboard/DashboardSide";
import Header from "../dashboard/Header";

export default function Wrapper({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Flex w="100%" align="center" justify="space-between" bg="#fff">
      <DashboardSide />
      <Flex flex="1" align="start" direction="column">
        <Header title={title} />
        <Flex
          w="100%"
          h="90vh"
          overflow="scroll"
          p="1rem"
          align="start"
          direction="column"
          gap="1rem"
          bg="#fefefe"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
