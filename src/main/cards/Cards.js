import classic from '../../assets/Cards/classic.png';
import gold from '../../assets/Cards/gold.png';
import platinum from '../../assets/Cards/platinum.png';
import Button from "../../shared/Button";
import styled from 'styled-components';
import RadioButtons from "./RadioButtons";

const StyledCards = styled.div`
  &{
    max-width: 1282px;
    width: 100%;
    margin: 64px auto;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }
  .cards{
    display: flex;
    justify-content: space-between;
  }
  
  h3{
    margin:0 0 10px 28px;
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
  }
  
  h4{
    margin: 0 0 16px 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
  }
  
  img{
    display: block;
  }
  
  .info{
    text-align: center;
    width: 288px;
    overflow-wrap: break-word;
    margin-left: 28px;
  }
  
  .text{
    margin-bottom: 16px;
  }
  
  button{
    margin-top: 35px;
  }
  .first{
    margin: 0 18px 0 18px;
    background-color:rgba(30, 42, 65, 1);
    border: 1px solid rgba(48, 48, 48, 1);
    height: 18px;
    width: 18px;
    padding: 0;
    box-shadow: 0 0 0 4px #f3f5f6 inset;
    border-radius: 50%;
  }
  .second{
    background-color:rgba(30, 42, 65, 1);
    border: none;
    height: 8px;
    width: 8px;
    padding: 0;
    border-radius: 50%;
    margin: 0 24px 0 0;
    transform: rotate(90deg);
  }
  
  ul{
    display: flex;
    align-items: center;
    padding: 0;
    margin: 48px 0 0 0;
    list-style: none;
  }
  li{
    display: flex;
  }
`


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