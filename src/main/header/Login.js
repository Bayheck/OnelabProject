import { ReactComponent as LoginIcon } from '../../assets/Profile.svg';
import StyledLogin from "../styled/styledHeader/StyledLogin";

const Login = () =>{
    return(
        <StyledLogin>
            <LoginIcon/>
            <span>Войти</span>
        </StyledLogin>
    )
}

export default Login;