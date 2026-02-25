import { merge, type Options } from "highcharts";

const baseChartOptions: Options = {
	chart: {
		backgroundColor: "rgba(0,0,0,0.32)",
		borderColor: "rgba(255,255,255,0.08)",
		borderRadius: 20,
		borderWidth: 1,
	},
	title: { text: undefined },
	xAxis: {
		labels: { style: { color: "#e2e8f0" } },
		title: { style: { color: "#e2e8f0" } },
		lineColor: "rgba(255,255,255,0.25)",
		tickColor: "rgba(255,255,255,0.25)",
	},
	yAxis: {
		labels: { style: { color: "#e2e8f0" } },
		title: { style: { color: "#e2e8f0" } },
		gridLineColor: "rgba(255,255,255,0.15)",
	},
	legend: {
		enabled: false,
		itemStyle: { color: "#e2e8f0" },
		itemHoverStyle: { color: "#ffffff" },
		itemHiddenStyle: { color: "rgba(226,232,240,0.45)" },
	},
};

export const createChartOptions = (options: Options) =>
	merge(baseChartOptions, options);
