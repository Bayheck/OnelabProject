import React,{useState} from 'react';
import {MenuItem} from "@mui/material";
import StyledSelect from "../styled/styledHeader/StyledSelect";

const SelectLang = () =>{
    const [select, setSelect] = useState("рус");

    return(
        <StyledSelect
            value={select}
            onChange = {() => {return (e:React.FormEvent<HTMLInputElement>) => {setSelect(e.currentTarget.value)}}}
        >
            <MenuItem value={"kaz"}>Kaz</MenuItem>
            <MenuItem value={"eng"}>Eng</MenuItem>
            <MenuItem value={"рус"}>Рус</MenuItem>
        </StyledSelect>
    )
}

export default SelectLang;