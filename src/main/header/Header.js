import Location from './Location';
import Horizontal from './Horizontal';
import CallNumber from './CallNumber';
import Login from './Login';
import SelectLang from "./SelectLang";
import StyledHeader from "../styled/styledHeader/StyledHeader";
import { ReactComponent as MyLogoIcon } from '../../assets/Logo.svg';

const Header = () =>{
    return(
        <StyledHeader>
            <div className="content">
                <MyLogoIcon/>
                <SelectLang></SelectLang>
                <Location/>
                <Horizontal/>
                <CallNumber/>
                <Login/>
            </div>
        </StyledHeader>
    )
}

export default Header;