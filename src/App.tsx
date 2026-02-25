import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";

function App() {
	return (
		<Box minH="100vh" bg="#0b1220" color="white">
			<Header />

			<Flex
				flexDirection="column"
				gap={10}
				px={4}
				py={6}
				alignItems="center"
			></Flex>
		</Box>
	);
}

export default App;
