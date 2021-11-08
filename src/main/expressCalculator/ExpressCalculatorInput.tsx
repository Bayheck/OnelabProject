import {IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import StyledExpressCalculatorInput from "../styled/styledExpressCalculator/StyledExpressCalculatorInput";
import React from "react";

interface Props  {
    isValid: boolean;
    showIndex: boolean;
    index: string;
    setShowIndex: (index:boolean)=>void;
    validate: (input:string)=> void;
}

const ExpressCalculatorInput:React.FC<Props> = ({isValid, showIndex, index, setShowIndex, validate})=>{
    return(
        <StyledExpressCalculatorInput variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">ИИН</InputLabel>
            <OutlinedInput
                error={isValid}
                id="outlined-password-input"
                type={showIndex ? 'number' : 'password'}
                value={index}
                onChange={(event) =>{validate(event.currentTarget.value)}}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={()=> setShowIndex(!showIndex)}
                            onMouseDown={(event) =>{event.preventDefault()}}
                        >
                            {showIndex ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="ИИН"
            />
        </StyledExpressCalculatorInput>
    )
}

export default ExpressCalculatorInput;