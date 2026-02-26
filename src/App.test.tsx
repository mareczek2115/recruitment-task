import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { Provider } from "./components/ui/provider";

vi.mock("./components/Header", () => ({
	Header: () => <header>HEADER</header>,
}));

vi.mock("./components/ChartBox", () => ({
	ChartBox: ({ title, children }: { title: string; children: ReactNode }) => (
		<section>
			<h2>{title}</h2>
			{children}
		</section>
	),
}));

vi.mock("./components/RevenuePerDay", () => ({
	RevenuePerDay: () => <div>RevenuePerDay</div>,
}));

vi.mock("./components/RevenuePerCategory", () => ({
	RevenuePerCategory: () => <div>RevenuePerCategory</div>,
}));

vi.mock("./components/OrdersPerCountry", () => ({
	OrdersPerCountry: () => <div>OrdersPerCountry</div>,
}));

describe("App", () => {
	it("renders header and all dashboard chart sections", () => {
		const html = renderToStaticMarkup(
			<Provider>
				<App />
			</Provider>,
		);

		expect(html).toContain("HEADER");
		expect(html).toContain("Trend przychodu dziennego");
		expect(html).toContain("Przychód według kategorii");
		expect(html).toContain("Liczba zamówień według kraju");
		expect(html).toContain("RevenuePerDay");
		expect(html).toContain("RevenuePerCategory");
		expect(html).toContain("OrdersPerCountry");
	});
});
