import data from "data.json";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { Dataset } from "@/types/dataset";
import { createChartOptions } from "@/utilities/chartOptions";

const dataset = data as Dataset;

const revenueByCategoryMap = dataset.orders.reduce(
	(acc, order) => {
		const revenue = order.quantity * order.unitPrice;
		acc[order.category] = (acc[order.category] ?? 0) + revenue;
		return acc;
	},
	{} as Record<string, number>,
);

const sortedCategories = Object.entries(revenueByCategoryMap).sort(
	(a, b) => b[1] - a[1],
);
const categories = sortedCategories.map(([category]) => category);
const revenues = sortedCategories.map(([, revenue]) =>
	Number(revenue.toFixed(2)),
);

const options: Highcharts.Options = createChartOptions({
	chart: { type: "column" },
	xAxis: {
		categories,
		title: { text: "Kategoria" },
	},
	yAxis: {
		title: { text: `Przychód (${dataset.meta.currency})` },
	},
	tooltip: {
		pointFormat: `<b>{point.y:.2f} ${dataset.meta.currency}</b>`,
	},
	series: [
		{
			type: "column",
			name: "Przychód",
			data: revenues,
			color: "#f6ad55",
		},
	],
});

export const RevenuePerCategory = () => (
	<HighchartsReact highcharts={Highcharts} options={options} />
);
