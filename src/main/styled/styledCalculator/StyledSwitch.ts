import styled from "styled-components";
import Switch from "@mui/material/Switch";

const StyledSwitch = styled(Switch)`
  &&{
    padding: 0;
    height: auto;
    width: auto;
    margin-right:16px;
  }
  & .MuiSwitch-thumb{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: none;
    background: #999999;
    position: absolute;
    top: 3px;
    left: 3px;
  }
  
  & .MuiButtonBase-root .MuiSwitch-input{
    top: 3px;
    left: 3px;
    width: 100%;
  }

  & .MuiSwitch-switchBase .MuiTouchRipple-root{
    display:none;
  }
 
  & .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked{
    background-color: rgba(0,0,0,0);
    transform: translateX(15px);
  }  
  
  & .MuiSwitch-track{
    width: 34px;
    height: 20px;
    border: 1px solid #999999;
    opacity: 1;
    background: #FFFFFF;
    border-radius: 16px;
    box-sizing: content-box;
  }

  & .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track{
    background-color: rgba(157, 37, 80, 1);
    opacity: 1;
  }
`

export default StyledSwitch;