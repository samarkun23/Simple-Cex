import { Router } from "express";
import { RedisClass } from "../redisQueue/Redis.js";
import { CREATE_ORDER } from "../types/order.js";

export const orderRouter = Router();

orderRouter.post("/", async(req,res) => {
    const {market , price , quantity , side , userId} = req.body;

    const response = await RedisClass.getInstance().sendAndAwait({
        type: CREATE_ORDER,
        data: {
            market,
            price,
            quantity,
            side,
            userId
        }
    }) as { payload: unknown };
    res.json(response.payload);
})

