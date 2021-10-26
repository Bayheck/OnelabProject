import styled from 'styled-components';
import Select from './Select';
import Location from './Location';
import Horizontal from './Horizontal';
import CallNumber from './CallNumber';
import Login from './Login';
import { ReactComponent as MyLogoIcon } from '../../assets/Logo.svg';

const StyledHeader = styled.div`
  background-color: #F8F8F8;
  .content{
    display: flex;
    justify-content: left;
    align-items: center;
    max-width: 1224px;
    width: 100%;
    height: 50px;
    margin: 0 auto;  
  }
  
  MyLogoIcon{
    margin-right: 34px;
  }
`

const Header = () =>{
    return(
        <StyledHeader>
            <div className="content">
                <MyLogoIcon/>
                <Select></Select>
                <Location/>
                <Horizontal/>
                <CallNumber/>
                <Login/>
            </div>
        </StyledHeader>
    )
}

export default Header;