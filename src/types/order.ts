import type { Customer } from "./customer";

export interface Order {
	orderId: string;
	timestamp: string;
	country: string;
	city: string;
	lat: number;
	lon: number;
	category: string;
	subcategory: string;
	product: string;
	quantity: number;
	unitPrice: number;
	paymentMethod: string;
	customerType: Customer;
	device: string;
	deliveryDays: number;
}
