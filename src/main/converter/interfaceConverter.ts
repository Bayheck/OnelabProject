export interface currencyList {
    kzt: number;
    rub: number;
    usd: number;
    eur: number;
    gbp: number;
}

export interface current {
    date:any;
    [key: string]: currencyList;
}
