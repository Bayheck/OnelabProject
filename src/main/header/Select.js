import React,{useState} from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select';
// const StyledReactSelect = styled(ReactSelect)`
//
// `

const StyledSelect = styled.div`
  margin: 0 38px 0 34px;
`

const Select = () =>{
    const [select, setSelect] = useState("рус");
    const options = [
        { value: 'каз', label: 'каз' },
        { value: 'eng', label: 'eng' },
        { value: 'рус', label: 'рус' }
    ]

    return(
        <StyledSelect>
            <select>
                <option value="kaz">Kaz</option>
                <option value="eng">Eng</option>
                <option value="рус">Рус</option>
            </select>
        </StyledSelect>

    )
}

export default Select;