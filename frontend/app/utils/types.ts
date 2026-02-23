
export interface KLine{
    close: string,

}

export interface Depth{
    bids: [string, string][],
    asks: [string, string][],
    lastUpdateId: string
}