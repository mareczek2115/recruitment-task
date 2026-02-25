import { Badge, Box, HStack } from "@chakra-ui/react";
import data from "data.json";
import type { Dataset } from "@/types/dataset";

const dataset = data as Dataset;

export const Header = () => {
	const generatedAt = new Date(dataset.meta.generatedAt).toLocaleDateString(
		"pl-PL",
		{
			year: "numeric",
			month: "long",
			day: "numeric",
		},
	);

	const sortedTimestamps = dataset.orders
		.map((order) => order.timestamp)
		.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

	const fromDate = sortedTimestamps[0]
		? new Date(sortedTimestamps[0]).toLocaleDateString("pl-PL")
		: "-";
	const toDate = sortedTimestamps[sortedTimestamps.length - 1]
		? new Date(
				sortedTimestamps[sortedTimestamps.length - 1],
			).toLocaleDateString("pl-PL")
		: "-";

	return (
		<Box
			px={4}
			py={6}
			borderBottom="3px solid"
			borderColor="#f7b500"
			bg="#0b1220"
		>
			<HStack gap={3}>
				<Badge
					px={4}
					py={2}
					rounded="full"
					fontWeight="500"
					bg="rgba(255,255,255,0.06)"
					color="white"
					border="1px solid"
					borderColor="rgba(255,255,255,0.12)"
					fontSize="sm"
				>
					Stan na dzień: {generatedAt}
				</Badge>

				<Badge
					px={4}
					py={2}
					rounded="full"
					fontWeight="500"
					bg="rgba(255,255,255,0.06)"
					color="white"
					border="1px solid"
					borderColor="rgba(255,255,255,0.12)"
					fontSize="sm"
				>
					Zakres: {fromDate} - {toDate}
				</Badge>
			</HStack>
		</Box>
	);
};
