import Button from "../../shared/Button";
import RadioButtons from "./RadioButtons";
import StyledCards from "../styled/styledCards/StyledCards";
import classic from '../../assets/Cards/classic.png';
import gold from '../../assets/Cards/gold.png';
import platinum from '../../assets/Cards/platinum.png';

const Cards = () =>{
    return(
        <StyledCards>
            <h3>Forte карты</h3>
            <div className="cards">
                <div className="single-card">
                    <img src={classic} alt="classic card"/>
                    <div className="info">
                        <h4>Classic</h4>
                        <div className="text">Выпуск карты бесплатно</div>
                        <div className="text">Снятие до 300 000 ₸ в месяц<br/>
                            Казахстана бесплатно</div>
                        <div className="text">CashBack до 15%</div>
                        <Button className="button">Заказать карту</Button>
                    </div>
                </div>
                <div>
                    <div className="single-card">
                        <img src={gold} alt="gold card" />
                        <div className="info">
                            <h4>Gold</h4>
                            <div className="text">Выпуск карты бесплатно</div>
                            <div className="text">Снятие до 500 000 ₸ в месяц<br/>
                                в банкоматах Казахстана бесплатно</div>
                            <div className="text">CashBack до 15%</div>
                            <Button className="button">Заказать карту</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single-card">
                        <img src={platinum} alt="platinum card"/>
                        <div className="info">
                            <h4>Platinum</h4>
                            <div className="text">Выпуск карты бесплатно</div>
                            <div className="text">Снятие до 3 000 000 ₸ в месяц<br/>
                                в банкоматах Казахстана бесплатно</div>
                            <div className="text">CashBack до 15%</div>
                            <Button className="button">Заказать карту</Button>
                        </div>
                    </div>
                </div>
            </div>
        <RadioButtons/>
        </StyledCards>
    )
}

export default Cards;