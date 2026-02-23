import { Router } from "express";
import { orderRouter } from "./orderRouter.js";

export const mainRoute = Router();

mainRoute.use("/order", orderRouter)