import { Box, Flex, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface MetricCardProps {
	title: string;
	accent: string;
	children: ReactNode;
}

export const ChartBox = ({ title, accent, children }: MetricCardProps) => {
	return (
		<Flex
			flexDirection="column"
			rowGap={2}
			bg="rgba(255,255,255,0.04)"
			border="1px solid"
			borderColor="rgba(255,255,255,0.08)"
			rounded="lg"
			p={4}
			position="relative"
			overflow="hidden"
			w="4xl"
		>
			<Box
				position="absolute"
				left={0}
				top={0}
				bottom={0}
				w="4px"
				bg={accent}
			/>
			<Text
				fontWeight="700"
				letterSpacing={1.8}
				fontSize="sm"
				color={accent}
				textTransform="uppercase"
			>
				{title}
			</Text>
			{children}
		</Flex>
	);
};
