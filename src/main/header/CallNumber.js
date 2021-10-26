import { ReactComponent as ContactIcon } from '../../assets/Contact.svg';
import styled from 'styled-components';

const StyledCallNumber = styled.div`
  margin-left: 144px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  width: 59px;
  
  & span{
    margin-left: 3px;
  }
`

const CallNumber = () =>{
    return(
        <StyledCallNumber>
            <ContactIcon/>
            <span>7575</span>
        </StyledCallNumber>
    )
}

export default CallNumber;