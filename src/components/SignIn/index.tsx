import { Box, Text, Flex, Button, Center } from "@chakra-ui/react";

const SignIn = () => {
  // setInterval(() => console.log("kod gri"), 3000);
  setTimeout(() => {
    console.log("macrotask");
  }, 0);

  Promise.resolve("value").then(() => console.log("microtask"));

  console.log("log");
  return (
    <Flex h="full" color="white" flex="1 1 auto" position="relative">
      <Flex
        px={6}
        py={4}
        w="60%"
        top={10}
        left={0}
        right={0}
        mx="auto"
        borderWidth={1}
        borderRadius="lg"
        position="absolute"
        alignItems="center"
        backdropFilter="auto"
        justifyContent="space-between"
        bgImage="linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.04) 70.38%)"
        backdropBlur="42px"
      >
        <Text fontWeight="semibold">VISION UI FREE</Text>
        <Box>adasda</Box>
        <Button>asdasda</Button>
      </Flex>
      <Center
        w="full"
        flexDir="column"
        bgRepeat="no-repeat"
        bgImage="https://demos.creative-tim.com/vision-ui-dashboard-chakra/static/media/signInImage.54090d1d.png"
      >
        <Text fontSize="xl" fontWeight="semibold">
          INSPIRED BY THE FUTURE:
        </Text>
        <Text mt={2} fontSize="3xl" fontWeight="semibold">
          THE VISION UI DASHBOARD
        </Text>
      </Center>
      <Center w="full"></Center>
    </Flex>
  );
};

export default SignIn;
