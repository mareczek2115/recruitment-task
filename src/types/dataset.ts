import type { Meta } from "./meta";
import type { Order } from "./order";

export interface Dataset {
	meta: Meta;
	orders: Order[];
}
