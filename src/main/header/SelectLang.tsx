import React,{useState} from 'react';
import {MenuItem, SelectChangeEvent} from "@mui/material";
import StyledSelect from "../styled/styledHeader/StyledSelect";

const SelectLang = () =>{
    const [select, setSelect] = useState<string>("рус");

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelect(event.target.value as string);
    };

    return(
        <StyledSelect
            value={select}
            onChange = {handleChange}
        >
            <MenuItem value={"kaz"}>Kaz</MenuItem>
            <MenuItem value={"eng"}>Eng</MenuItem>
            <MenuItem value={"рус"}>Рус</MenuItem>
        </StyledSelect>
    )
}

export default SelectLang;