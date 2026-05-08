import type { CREATE_ORDER } from "./order.js"

export type MessageToEngin = {
    type: typeof CREATE_ORDER,
    data: {
        market: string,
        price: string,
        quantity: string,
        side: "buy" | "sell",
        userId: string
    } | {
        type: typeof 
    }
}