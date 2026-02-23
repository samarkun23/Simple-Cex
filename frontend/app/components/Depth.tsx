'use client'

import { useEffect, useState } from "react"
import { getDepth } from "../utils/httpClient";

export function Depth() {
    const [bids, setBids] = useState<[string, string][]>();


    console.log(bids);
    useEffect(() => {
        getDepth("SOL_USDC").then(d => {
            setBids(d.bids);
        })

    }, [])

    console.log(bids);
    return <div>
        
        {bids}
    </div>
}