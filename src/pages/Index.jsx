import { Box, Container, Text, VStack, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaCog } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md" mb={6}>
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
        <IconButton aria-label="About" icon={<FaInfoCircle />} variant="ghost" color="white" />
        <IconButton aria-label="Settings" icon={<FaCog />} variant="ghost" color="white" />
      </Flex>
      <Box bg="gray.100" p={4} borderRadius="md" minH="70vh">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a placeholder for future content.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;