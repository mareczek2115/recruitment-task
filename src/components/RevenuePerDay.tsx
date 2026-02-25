import data from "data.json";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { Dataset } from "@/types/dataset";
import { createChartOptions } from "@/utilities/chartOptions";

const dataset = data as Dataset;

const revenueByDayMap = dataset.orders.reduce(
	(acc, order) => {
		const day = order.timestamp.slice(0, 10);
		const revenue = order.quantity * order.unitPrice;
		acc[day] = (acc[day] ?? 0) + revenue;
		return acc;
	},
	{} as Record<string, number>,
);

const sortedDays = Object.keys(revenueByDayMap).sort((a, b) =>
	a.localeCompare(b),
);
const revenueSeries = sortedDays.map((day) =>
	Number(revenueByDayMap[day].toFixed(2)),
);

const options: Highcharts.Options = createChartOptions({
	chart: { type: "line" },
	xAxis: {
		categories: sortedDays,
		title: { text: "Dzień" },
	},
	yAxis: {
		title: { text: `Przychód (${dataset.meta.currency})` },
	},
	tooltip: {
		pointFormat: `<b>{point.y:.2f} ${dataset.meta.currency}</b>`,
	},
	series: [
		{
			type: "line",
			name: "Przychód",
			data: revenueSeries,
			color: "#4fd1c5",
		},
	],
});

export const RevenuePerDay = () => (
	<HighchartsReact highcharts={Highcharts} options={options} />
);
