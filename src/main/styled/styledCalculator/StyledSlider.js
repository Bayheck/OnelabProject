import styled from "styled-components";
import Slider from "@mui/material/Slider";

const StyledSlider = styled(Slider)`
    &&{
      width: 631px;
      margin-right: 16px;
    }
  
    & .MuiSlider-root{
      border-radius: 4px;
    }
  
    & .MuiSlider-track{
      color: rgba(30, 42, 65, 1);
      height: 4px;
      border: none;
    }
  
    & .MuiSlider-rail{
      color: rgba(255, 255, 255, 1);
      height: 4px;
    }
  
    & .MuiSlider-thumb{
      width: 24px;
      height: 24px;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
    }
  
    & .MuiSlider-thumb::after{
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: rgba(157, 37, 80, 1);
    }
  
    & .Mui-active::after{
      background-color: green;
    }
`

export default StyledSlider;