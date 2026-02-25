import { Box, Flex } from "@chakra-ui/react";
import { ChartBox } from "./components/ChartBox";
import { Header } from "./components/Header";

function App() {
	return (
		<Box minH="100vh" bg="#0b1220" color="white">
			<Header />

			<Flex flexDirection="column" gap={10} px={4} py={6} alignItems="center">
				<ChartBox title="test 1" accent="#19d3ff">
					<></>
				</ChartBox>

				<ChartBox title="test 2" accent="#f7b500">
					<></>
				</ChartBox>

				<ChartBox title="test 3" accent="#d96bff">
					<></>
				</ChartBox>
			</Flex>
		</Box>
	);
}

export default App;
