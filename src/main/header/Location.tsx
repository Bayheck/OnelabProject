import StyledLocation from "../styled/styledHeader/StyledLocation";
import React, {useState} from "react";
import StyledSelect from "../styled/styledHeader/StyledSelect";
import {MenuItem, SelectChangeEvent} from "@mui/material";

const cities:string[] = ["Kostanay", "Astana", "Karaganda"];

const Location = () =>{
    const [select, setSelect] = useState<string>("Kostanay");

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelect(event.target.value as string);
    };

    return(
        <StyledLocation>
            <StyledSelect
                id="demo-simple-select"
                value={select}
                onChange = {handleChange}
            >
                {
                    cities.map((value) =>(
                        <MenuItem value={value}>{value}</MenuItem>
                    ))
                }
            </StyledSelect>
        </StyledLocation>
    )
}

export default  Location;