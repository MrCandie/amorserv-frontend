import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function ReusableSkeleton() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Flex
      w="100%"
      align="center"
      gap="1rem"
      p={{ lg: "1rem", md: "0.8rem", base: "0.5rem" }}
      justify="space-between"
      wrap="wrap"
    >
      {data.map((_, i) => (
        <Box
          w={{ lg: "15%", md: "45%", base: "45%" }}
          key={i}
          padding="6"
          boxShadow="lg"
          bg="white"
        >
          <SkeletonCircle size={{ lg: "20", md: "16", base: "10" }} />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      ))}
    </Flex>
  );
}
