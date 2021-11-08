import styled from "styled-components";
import Select from "@mui/material/Select";
import selectTag from "../../../assets/SelectTag.svg";

const StyledSelect = styled(Select)`
  &&{
    margin: 0 30px 0 20px;
    font-size: 14px;
  }
  
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
    top: 25px;
    background-image: url(${selectTag});
  }

  @media screen and (max-width: 415px) {
    && {
      display: none;
    }

  }
`

export default StyledSelect;