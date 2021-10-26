import { ReactComponent as LoginIcon } from '../../assets/Profile.svg';
import styled from 'styled-components';

const StyledLogin = styled.div`
  &{
    margin-left: 48px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  
  & span{
    margin-left: 6px;
  }
`

const Login = () =>{
    return(
        <StyledLogin>
            <LoginIcon/>
            <span>Войти</span>
        </StyledLogin>
    )
}

export default Login;