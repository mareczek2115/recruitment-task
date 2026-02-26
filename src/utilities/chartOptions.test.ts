import type { Options } from "highcharts";
import { describe, expect, it } from "vitest";
import { createChartOptions } from "./chartOptions";

describe("createChartOptions", () => {
	it("correctly merges default and custom options", () => {
		const testOptions: Options = {
			chart: {
				type: "scatter",
			},
			xAxis: {
				title: {
					text: "X axis",
				},
			},
			yAxis: {
				title: {
					text: "Y axis",
				},
			},
			series: [{ data: [1, 2, 3] }],
		};

		const options = createChartOptions(testOptions);

		expect(options.chart?.type).toBe("scatter");
		expect(options.xAxis).toMatchObject({ title: { text: "X axis" } });
		expect(options.yAxis).toMatchObject({ title: { text: "Y axis" } });
		expect(options.series).toEqual([{ data: [1, 2, 3] }]);
		expect(options.chart?.borderRadius).toBe(20);
	});

	it("overrides default options", () => {
		const testOptions: Options = {
			legend: { enabled: true },
		};

		const options = createChartOptions(testOptions);

		expect(options.legend?.enabled).toBe(true);
		expect(options.legend?.itemStyle).toEqual({ color: "#e2e8f0" });
	});
});
