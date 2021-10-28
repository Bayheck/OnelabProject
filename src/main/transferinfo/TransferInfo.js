import StyledTransferInfo from "../styled/styledTransferInfo/StyledTransferInfo";
import Button from "../../shared/Button";
import world from '../../assets/TransferInfo/world.png';
import phone from '../../assets/TransferInfo/phone.png';
import { ReactComponent as QuestionIcon } from '../../assets/TransferInfo/question.svg';

const TransferInfo = () =>{
    return(
        <StyledTransferInfo>
            <div className="twoBlocks">
                <div className="block">
                    <div className="content">
                        <h5>Перевод с карты на любую карту мира</h5>
                        <button className="button">Подробнее</button>
                        <img className="worldImg" src={world} alt="world"/>
                    </div>
                </div>
                <div className="block">
                    <div className="content">
                        <h5>Оплата платежей online</h5>
                        <span>Оплата штрафов, коммунальных услуг, услуг сотовых операторов и многое другое</span>
                        <Button>Произвести платеж</Button>
                        <img className="phoneImg" src={phone} alt="phone"/>
                    </div>
                </div>
            </div>
            <div className="threeBlocks">
                <div className="questionBlock">
                    <QuestionIcon/>
                    <h6>Как проверить, наложен ли на счет арест/ПТП?</h6>
                    <span>
                        Информацию о том, наложен ли арест на ваш счёт вы
                        можете узнать: - на сайте Министерства юстиции РК в реестре
                        должников по исполнительным производствам; - в личном
                        кабинете на портале электронного правительства e-gov.kz.
                    </span>
                </div>
                <div className="questionBlock">
                    <QuestionIcon/>
                    <h6>Где посмотреть выписку по карте?</h6>
                    <span>
                        Выписку по карте вы сможете посмотреть в своем
                        Мобильном приложении либо, обратившись в ближайшее отделение Банка.
                    </span>
                </div>
                <div className="questionBlock">
                    <QuestionIcon/>
                    <h6>Что такое CVC2/CVV2?</h6>
                    <span>
                        CVC2/CVV2 — это трехзначный код,
                        указанный на оборотной стороне карты, на панели для подписи.
                    </span>
                </div>
            </div>
        </StyledTransferInfo>
    )
}

export default TransferInfo;