import StyledFooter from "../styled/styledFooter/StyledFooter";
import { ReactComponent as Instagram } from '../../assets/Footer/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/Footer/fb.svg';
import { ReactComponent as Youtube } from '../../assets/Footer/youtube.svg';
import { ReactComponent as Tiktok } from '../../assets/Footer/tiktok.svg';
import eye from "../../assets/Footer/eye.svg";

const Footer = () =>{
    return(
        <StyledFooter>
            <div className="main">
                <div className="infoBlocks">
                    <div className="infoLinkList bank">
                        <div className="about">Банк</div>
                        <ul>
                            <li>Кредиты</li>
                            <li> Карты</li>
                            <li>Депозиты</li>
                            <li>Переводы</li>
                            <li>Мобильное приложение</li>
                            <li>Тарифы</li>
                            <li>Сейфовые ячейки</li>
                        </ul>
                    </div>
                    <div className="infoLinkList us">
                        <div className="about">О нас</div>
                        <ul>
                            <li>Информация</li>
                            <li> Руководство</li>
                            <li>Отчетность</li>
                            <li>Документы</li>
                            <li>Контакты</li>
                            <li>Отделения и банкоматы</li>
                            <li>Отделения в период карантина</li>
                            <li>Вакансии</li>
                        </ul>
                    </div>
                    <div className="infoLinkList press">
                        <div className="about">Пресс-Центр</div>
                        <ul>
                            <li>Новости</li>
                            <li> Пресс-релизы</li>
                            <li className="coloredInfo">press@forte.bank</li>
                        </ul>
                    </div>
                    <div className="infoLinkList">
                        <div className="about">Дополнительно</div>
                        <ul>
                            <li>Premier</li>
                            <li>International Relations</li>
                            <li>Реализация имущества</li>
                            <li>175-летие Абая</li>
                            <li>Apple Pay</li>
                            <li>Samsung Pay</li>
                            <li>ForteForex</li>
                            <li>Специальные предложения</li>
                        </ul>
                    </div>
                </div>
                <div className="contacts">
                    <div>
                        <div className="coloredInfo">
                            Оставить обратную связь
                        </div>
                        <div className="rights">
                            Все права защищены © forte 2020
                        </div>
                    </div>
                    <div className="socials">
                        <Instagram/>
                        <Facebook className = "facebook"/>
                        <Youtube/>
                        <Tiktok/>
                    </div>
                    <div className="visionContainer">
                        <button className="visionButton">Версия для слабовидящих:</button>
                        <img src={eye} alt="eye"/>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;