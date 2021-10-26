import { ReactComponent as ContactIcon } from '../../assets/Contact.svg';
import StyledCallNumber from "../styled/styledHeader/StyledCallNumber";

const CallNumber = () =>{
    return(
        <StyledCallNumber>
            <ContactIcon/>
            <span>7575</span>
        </StyledCallNumber>
    )
}

export default CallNumber;