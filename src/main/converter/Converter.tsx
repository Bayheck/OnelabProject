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

    let table;
    if(kzt !== undefined){
        table= [
            {
                name: 'USD',
                sign: '$',
                lanCode: 'usd',
                currency: kzt['usd'],
            },
            {
                name: 'EUR',
                sign: '€',
                lanCode: 'eur',
                currency: kzt['eur'],
            },
            {
                name: 'RUB',
                sign: '₽',
                lanCode: 'rub',
                currency: kzt['rub'],
            },
            {
                name: 'GBP',
                sign: '£',
                lanCode: 'gbp',
                currency: kzt['gbp'],
            }
        ]
    }

    let buttons = [
        {
            name: 'usd',
            className: 'dollar',
            isChosenFrom: from === 'usd'?'chosen':'',
            isChosenTo: to === 'usd'?'chosen':'',
        },
        {
            name: 'eur',
            className: 'euro',
            isChosenFrom: from === 'eur'?'chosen':'',
            isChosenTo: to === 'eur'?'chosen':'',
        },
        {
            name: 'rub',
            className: 'rub',
            isChosenFrom: from === 'rub'?'chosen':'',
            isChosenTo: to === 'rub'?'chosen':'',
        },
        {
            name: 'gbp',
            className: 'pound',
            isChosenFrom: from === 'gbp'?'chosen':'',
            isChosenTo: to === 'gbp'?'chosen':'',
        },
        {
            name: 'kzt',
            className: 'tenge',
            isChosenFrom: from === 'kzt'?'chosen':'',
            isChosenTo: to === 'kzt'?'chosen':'',
        },
    ]

    return(
        <StyledConverter>
            <h3>Курсы безналичной конвертации валют</h3>
            <span>Курс актуален на {data !== undefined && data.date}</span>
            <div className="main">
                <div className="currencyBlock">
                    <div className="heading">
                        <div>Покупка</div>
                        <div className="sell">Продажа</div>
                    </div>
                    {table !== undefined && table.map(({name,sign, currency}) =>(
                        <div className="horizontal">
                            <div>{sign}</div>
                            <div className="current">{name}</div>
                            <div className="buy">{Math.round((1 / currency * 0.98)* 100) / 100}</div>
                            <div className="sellCur">{ Math.round((1 / currency)* 100) / 100}</div>
                        </div>
                    ))}
                </div>
                <div className="currencyCalculate">
                    <div className = "convert">
                        <button className="convertButton" onClick={()=>convert()}></button>
                    </div>
                    <h5>Конвертация валюты</h5>
                    <div className="input upper-input">
                        <input type="number" placeholder="From" value={input} onChange={(e)=>setInput(e.currentTarget.value)} />
                        <div>
                            {buttons.map(({name,className,isChosenFrom}) =>(
                                <button onClick={() => setFrom(name)} className={`${className} ${isChosenFrom}`}></button>
                            ))}
                        </div>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="To" value={converted} />
                        <div>
                            {buttons.map(({name, className,isChosenTo}) =>(
                                <button onClick={() => setTo(name)} className={`${className} ${isChosenTo}`}></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </StyledConverter>
    )
}

export default Converter;