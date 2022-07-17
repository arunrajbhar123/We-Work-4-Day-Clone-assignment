import { Box, Image, HStack, Text, Grid, Flex } from "@chakra-ui/react";
const JobList = ({ border, id, title, icon, name, salary, leftIcon, type }) => {
  return (
    <Box
      size="lg"
      cursor="pointer"
      _hover={{ boxShadow: "xl" }}
      p="3"
      rounded="md"
      bg="white"
      border={border && "1px solid blue"}
  
      borderRadius="8px"
      w={["350px","450px","650px"]}
      mt="1rem"
    >
      <Flex justifyContent="space-between" alignItems="start">
        <HStack alignItems="start">
          <Image src={icon} w="10" />

          <Grid w="200px" textAlign="start">
            <Text fontSize="ms">{name}</Text>
            <Text fontSize="1xl" fontWeight="bold">
              {title}
            </Text>
            <Text fontSize="ms">{salary}</Text>
          </Grid>
        </HStack>
        <Box>
          <HStack>
            {leftIcon.map((el, index) => (
              <HStack key={index}>
                <Image src={el} />
              </HStack>
            ))}
          </HStack>
          <Text mt="2rem">{type}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
export default JobList;
