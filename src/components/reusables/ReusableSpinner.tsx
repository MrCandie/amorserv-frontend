import { Flex, Spinner } from "@chakra-ui/react";

export default function ReusableSpinner({ height }: { height: string }) {
  return (
    <Flex w="100%" align="center" justify="center" h={height ? height : "20vh"}>
      <Spinner color="green.500" size={{ lg: "lg", md: "md", base: "md" }} />
    </Flex>
  );
}
