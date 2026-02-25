import data from "data.json";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { Dataset } from "@/types/dataset";
import { createChartOptions } from "@/utilities/chartOptions";

const dataset = data as Dataset;

const ordersByCountryMap = dataset.orders.reduce(
	(acc, order) => {
		acc[order.country] = (acc[order.country] ?? 0) + 1;
		return acc;
	},
	{} as Record<string, number>,
);

const sortedCountries = Object.entries(ordersByCountryMap).sort(
	(a, b) => b[1] - a[1],
);
const countries = sortedCountries.map(([country]) => country);
const ordersCount = sortedCountries.map(([, count]) => count);

const options: Highcharts.Options = createChartOptions({
	chart: { type: "bar" },
	xAxis: {
		categories: countries,
		title: { text: "Kraj" },
	},

	yAxis: {
		min: 0,
		title: { text: "Liczba zamówień" },
		allowDecimals: false,
	},
	tooltip: {
		formatter: function () {
			return `<b>${this.key}</b><br/>Zamówienia: <b>${this.y}</b>`;
		},
	},
	plotOptions: {},
	series: [
		{
			type: "bar",
			name: "Zamówienia",
			data: ordersCount,
			color: "#fc8181",
		},
	],
});

export const OrdersPerCountry = () => (
	<HighchartsReact highcharts={Highcharts} options={options} />
);
