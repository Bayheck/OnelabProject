import StyledCreditConditions from "../styled/styledCreditConditions/StyledCreditConditions";
import { ReactComponent as HandIcon } from '../../assets/CreditDetails/credit.svg';
import { ReactComponent as DateIcon } from '../../assets/CreditDetails/date.svg';
import { ReactComponent as PercentIcon } from '../../assets/CreditDetails/procents.svg';

const CreditConditions = ()=>{
    return(
        <StyledCreditConditions>
            <h3>Получить кредит на выгодных условиях</h3>
            <div className="iconsContainer">
                <div className="firstIcon iconBlock">
                    <HandIcon/>
                    До 7 000 000 ₸
                </div>
                <div className="iconBlock">
                    <DateIcon/>
                    До 5 лет
                </div>
                <div className="iconBlock">
                    <PercentIcon/>
                    От 7% годовых
                </div>
            </div>
            <div className="message">
                Рассчитаем займ с минимальной ставкой в тот же день и сразу сообщим о решении
            </div>
        </StyledCreditConditions>
    )
}

export default CreditConditions;