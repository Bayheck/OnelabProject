import StyledStonks from "../styled/styledStonks/StyledStonks";

const Stonks = ()=>{
    return(
        <StyledStonks>
            <h2>Получить кредит на выгодных условиях</h2>
            <div className="main">
                <div className="block">
                    <div className="header">
                        <h3>Минимальная ставка по кредиту с комиссиями</h3>
                    </div>
                    <div className="wrapper">
                        <div className="subBlock">
                            <div className="subheader">Сумма:</div>
                            <div className="body">от 100 000 до 7 000 000 тенге</div>
                        </div>
                        <div className="subBlock">
                            <div className="subheader">Ставки вознаграждения:</div>
                            <div className="body">от 7% (ГЭСВ от 7,3%)</div>
                        </div>
                        <div className="subBlock">
                            <div className="subheader">Срок:</div>
                            <div className="body">до 5 лет</div>
                        </div>
                        <div className="subBlock">
                            <div className="subheader">Комиссия за организацию займа:</div>
                            <div className="body">от 2,25%</div>
                        </div>
                        <div className="subBlock">
                            <div className="subheader">Комиссия за выдачу наличных:</div>
                            <div className="body">По <span>тарифам</span> платежных карточек для физических лиц</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="header">
                        <h3>Стандартная ставка по кредиту без комиссий</h3>
                    </div>
                    <div className="wrapper">
                        <div className="subBlock">
                            <div className="subheader">Сумма:</div>
                            <div className="body">от 100 000 до 7 000 000 тенге</div>
                        </div>
                        <div className="subBlock">
                            <div className="subheader">Ставки вознаграждения:</div>
                            <div className="body">от 21,99% (ГЭСВ от 24,4%)</div>
                        </div>
                        <div className="subBlock">
                            <div className="subheader">Срок:</div>
                            <div className="body">до 5 лет</div>
                        </div>
                        <div className="subBlock">
                            <div className="subheader">Комиссия за организацию займа:</div>
                            <div className="body">0%</div>
                        </div>
                        <div className="subBlock">
                            <div className="subheader">Комиссия за выдачу наличных:</div>
                            <div className="body">По <span>тарифам</span> платежных карточек для физических лиц</div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledStonks>
    )
}

export default Stonks;