import StyledConverter from "../styled/styledConverter/StyledConverter";
import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {current, currencyList} from "./interfaceConverter";

const Converter = () =>{
    const [data, setData] = useState<current>();
    const [from, setFrom] = useState<string>('usd');
    const [to, setTo] = useState<string>('rub');
    const [input, setInput] = useState<string>('');
    const [converted, setConverted] = useState<string>('');
    const [kzt, setKzt] = useState<currencyList>();

    useEffect(() => {
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/kzt.json`)
            .then((res) => {
                setKzt(res.data["kzt"]);
            })
    }, []);

    useEffect(() => {
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
            .then((res) => {
                setData(res.data);
            })
    }, [from]);

    function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
        return key in obj
    }

    const convert = () =>{
        if(data !== undefined){
            let cur:currencyList = data[from];
            if (hasKey(cur, to)) {
                let con:number = parseInt(input, 10) * cur[to];
                setConverted((Math.round(con)).toLocaleString());
            }
        }
    }

    let exchange;
    if(kzt !== undefined){
        exchange = {
            usdBuy: Math.round((1 / kzt["usd"] * 0.98)* 100) / 100,
            usdSell: Math.round((1 / kzt["usd"])* 100) / 100,
            eurBuy: Math.round((1 / kzt["eur"] * 0.98)* 100) / 100,
            eurSell: Math.round((1 / kzt["eur"])* 100) / 100,
            rubBuy: Math.round((1 / kzt["rub"] * 0.98)* 100) / 100,
            rubSell: Math.round((1 / kzt["rub"])* 100) / 100,
            gbpBuy: Math.round((1 / kzt["gbp"] * 0.98)* 100) / 100,
            gbpSell: Math.round((1 / kzt["gbp"])* 100) / 100,
        }
    }

    return(
        <StyledConverter>
            <h3>Курсы безналичной конвертации валют</h3>
            <span>Курс актуален на {data !== undefined?data.date: ''}</span>
            <div className="main">
                <div className="currencyBlock">
                    <div className="heading">
                        <div>Покупка</div>
                        <div className="sell">Продажа</div>
                    </div>
                    <div className="horizontal">
                        <div>$</div>
                        <div className="current">USD</div>
                        <div className="buy">{exchange !== undefined? exchange.usdBuy:''}</div>
                        <div className="sellCur">{exchange !== undefined? exchange.usdSell:''}</div>
                    </div>
                    <div className="horizontal">
                        <div>€</div>
                        <div className="current">EUR</div>
                        <div className="buy">{exchange !== undefined?exchange.eurBuy:''}</div>
                        <div className="sellCur">{exchange !== undefined?exchange.eurSell:''}</div>
                    </div>
                    <div className="horizontal">
                        <div>₽</div>
                        <div className="current">RUB</div>
                        <div className="buy">{exchange !== undefined?exchange.rubBuy:''}</div>
                        <div className="sellCur">{exchange !== undefined?exchange.rubSell:''}</div>
                    </div>
                    <div className="horizontal">
                        <div>£</div>
                        <div className="current">GBP</div>
                        <div className="buy">{exchange !== undefined?exchange.gbpBuy:''}</div>
                        <div className="sellCur">{exchange !== undefined?exchange.gbpSell:''}</div>
                    </div>
                </div>
                <div className="currencyCalculate">
                    <div className = "convert">
                        <button className="convertButton" onClick={()=>convert()}></button>
                    </div>
                    <h5>Конвертация валюты</h5>
                    <div className="input upper-input">
                        <input type="number" placeholder="From" value={input} onChange={(e)=>setInput(e.currentTarget.value)} />
                        <div>
                            <button onClick={() => setFrom("usd")} className={`dollar ${from === "usd"?"chosen":""}`}></button>
                            <button onClick={() => setFrom("eur")} className={`euro ${from === "eur"?"chosen":""}`}></button>
                            <button onClick={() => setFrom("rub")} className={`rub ${from === "rub"?"chosen":""}`}></button>
                            <button onClick={() => setFrom("gbp")} className={`pound ${from === "gbp"?"chosen":""}`}></button>
                            <button onClick={() => setFrom("kzt")} className={`tenge ${from === "kzt"?"chosen":""}`}></button>
                        </div>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="To" value={converted} />
                        <div>
                            <button onClick={() => setTo("usd")} className={`dollar ${to === "usd"?"chosen":""}`}></button>
                            <button onClick={() => setTo("eur")} className={`euro ${to === "eur"?"chosen":""}`}></button>
                            <button onClick={() => setTo("rub")} className={`rub ${to === "rub"?"chosen":""}`}></button>
                            <button onClick={() => setTo("gbp")} className={`pound ${to === "gbp"?"chosen":""}`}></button>
                            <button onClick={() => setTo("kzt")} className={`tenge ${to === "kzt"?"chosen":""}`}></button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledConverter>
    )
}

export default Converter;