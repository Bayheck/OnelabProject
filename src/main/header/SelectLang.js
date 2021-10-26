import React,{useState} from 'react';
import styled from 'styled-components';
import Select from '@mui/material/Select';
import selectTag from '../../assets/SelectTag.svg';


const StyledSelect = styled(Select)`
  margin: 0 38px 0 34px;
 
  input{
    top: 10px;  
  }
  
  fieldset{
    border: none;
    height: 30px;
  }
  
  & .MuiSelect-icon{
    width: 10px;
    height: 6px;
    color: #F8F8F8;
    background-image: url(${selectTag});
  }
`



const SelectLang = () =>{
    const [select, setSelect] = useState("рус");
    const options = [
        { value: 'каз', label: 'каз' },
        { value: 'eng', label: 'eng' },
        { value: 'рус', label: 'рус' }
    ]

    return(
        <StyledSelect>
            {/*<select>*/}
            {/*    <option value="kaz">Kaz</option>*/}
            {/*    <option value="eng">Eng</option>*/}
            {/*    <option value="рус">Рус</option>*/}
            {/*</select>*/}
        </StyledSelect>

    )
}

export default SelectLang;