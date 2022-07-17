import {
  Box,
  Badge,
  Text,
  HStack,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Image,
  Grid,
} from "@chakra-ui/react";
import FilterIcon from "../FIlterIcon.svg";
import EarthIcon from "../Earth.svg";
import MarketingIcon from "../MarketingIcon.svg";
import CodeIcon from "../CodeIcon.svg";
const Content = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box fontSize="6xl" textTransform="capitalize" fontWeight="bold"
    
    mb="3rem">
      <Text>
        find the right <br />
        <Badge
          bgGradient="linear(to-t, #3182ce, #805ad5)"
          bgClip="text"
          fontSize="6xl"
          textTransform="capitalize"
        >
          four-day
        </Badge>
        Week job
      </Text>
      <HStack w={"30rem"} m="auto">
        <Input
          placeholder="Type job title or keyword"
          size="lg"
          boxShadow="xl"
          p="6"
          rounded="md"
          bg="white"
        />
        <>
          <Button onClick={onOpen}>
            <Image src={FilterIcon} />
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </HStack>
      <Grid
        gridTemplateColumns=" repeat(3, 1fr)"
        m="auto"
        c="#fff"
        w="25rem"
        mt="25px"
        placeItems="center"
      >
        <Button bgGradient="linear(to-t, #3182ce, #805ad5)">
          <Image src={EarthIcon} />
          Remote
        </Button>
        <Button bgGradient="linear(to-t, #3182ce, #805ad5)">
          <Image src={CodeIcon} />
          Tech
        </Button>
        <Button bgGradient="linear(to-t, #3182ce, #805ad5)">
          <Image src={MarketingIcon} />
          Marketing
        </Button>
      </Grid>
    </Box>
  );
};
export default Content;
