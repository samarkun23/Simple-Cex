import axios from "axios";
import { Depth } from "./types";

const BASE_URL="https://api.backpack.exchange/api/v1"

export async function getDepth(market: string): Promise<Depth> {
    const response = await axios.get(`${BASE_URL}/depth?symbol=${market}`);
    console.log("THIS IS THE RESPONSE", response);
    return response.data;

}