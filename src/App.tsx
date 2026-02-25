import { Box, Flex } from "@chakra-ui/react";
import { ChartBox } from "./components/ChartBox";
import { Header } from "./components/Header";
import { RevenuePerCategory } from "./components/RevenuePerCategory";
import { RevenuePerDay } from "./components/RevenuePerDay";

function App() {
	return (
		<Box minH="100vh" bg="#0b1220" color="white">
			<Header />

			<Flex flexDirection="column" gap={10} px={4} py={6} alignItems="center">
				<ChartBox title="Trend przychodu dziennego" accent="#19d3ff">
					<RevenuePerDay />
				</ChartBox>

				<ChartBox title="Przychód według kategorii" accent="#f7b500">
					<RevenuePerCategory />
				</ChartBox>

				<ChartBox title="test 3" accent="#d96bff">
					<></>
				</ChartBox>
			</Flex>
		</Box>
	);
}

export default App;
