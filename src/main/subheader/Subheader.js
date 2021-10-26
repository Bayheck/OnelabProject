import styled from 'styled-components';
import { ReactComponent as ArrowsIcon } from '../../assets/Subheader/arrows.svg';
import { ReactComponent as CardIcon } from '../../assets/Subheader/card.svg';
import { ReactComponent as DiamondIcon } from '../../assets/Subheader/diamond.svg';
import { ReactComponent as HomeIcon } from '../../assets/Subheader/home.svg';
import { ReactComponent as InsuranceIcon } from '../../assets/Subheader/insurance.svg';
import { ReactComponent as LocationIcon } from '../../assets/Subheader/location.svg';
import { ReactComponent as MoneyIcon } from '../../assets/Subheader/money.svg';

const StyledSubHeader = styled.div`
    &{
      max-width: 1224px;
      width: 100%;
      margin: 0 auto;
    }
  
    & ul{
      padding: 0;
      font-size: 14px;
      line-height: 17px;
      margin: 20px 0 20px 281px;
    }
  
    & ul li{
      display: inline-block;
      margin-right: 56px;
      text-align: center;
    }

    & ul li:last-child {
      margin-right: 0px;
    }
  
    &&& ul > li > svg{
      margin-bottom: 10px;
    }
`

const Subheader = () =>{
    return(
        <StyledSubHeader>
            <ul>
                <li>
                    <CardIcon/>
                    <div>карты</div>
                </li>
                <li>
                    <MoneyIcon/>
                    <div>Депозиты</div>
                </li>
                <li>
                    <ArrowsIcon/>
                    <div>Переводы</div>
                </li>
                <li>
                    <InsuranceIcon/>
                    <div>Insurance</div>
                </li>
                <li>
                    <DiamondIcon/>
                    <div>Premier</div>
                </li>
                <li>
                    <HomeIcon/>
                    <div>ForteFamily</div>
                </li>

                <li>
                    <LocationIcon/>
                    <div>Контакты</div>
                </li>
            </ul>
        </StyledSubHeader>
    )
}

export default Subheader;