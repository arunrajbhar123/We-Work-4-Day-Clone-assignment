import { Box, Text, HStack, Input, Button } from "@chakra-ui/react";
import { jobsData } from "../data/db.js";
import JobList from "./JobList";
const Job = () => {
  return (
    <Box bg="#EDF2F7" pt="4rem" pb="2rem" m="auto">
      <Box m="auto" w={["350px", "650px", "650px"]}>
        <HStack fontSize="4xl" fontWeight="bold">
          <Text color="#6B46C1">Recent</Text>
          <Text>Jobs</Text>
        </HStack>
        {jobsData &&
          jobsData.map((el, index) => <JobList key={index} {...el} />)}
        <Box
          bgGradient="linear(to-t, #3182ce, #805ad5)"
          w={["350px", "350px", "550px"]}
          p="4"
          m="auto"
          mt="5"
          color="#fff"
          borderRadius="8px"
        >
          <Text>Subscribe to our Newsletter</Text>
          <HStack m="auto" p="4">
            <Input placeholder="Your Email" w="200px" bg="#fff" />
            <Button colorScheme="green">Submit</Button>
          </HStack>
          <Text>Receive the best job offers every week ✌️</Text>
        </Box>
        {jobsData &&
          jobsData.map((el, index) => <JobList key={index} {...el} />)}
      </Box>
    </Box>
  );
};
export default Job;
