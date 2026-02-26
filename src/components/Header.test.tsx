import data from "data.json";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { Dataset } from "@/types/dataset";
import { Header } from "./Header";
import { Provider } from "./ui/provider";

const dataset = data as Dataset;

describe("Header", () => {
	it("renders generated date and orders date range from dataset", () => {
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

		const html = renderToStaticMarkup(
			<Provider>
				<Header />
			</Provider>,
		);

		expect(html).toContain(`Stan na dzień: ${generatedAt}`);
		expect(html).toContain(`Zakres: ${fromDate} - ${toDate}`);
	});
});
