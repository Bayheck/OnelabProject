import React,{useState} from 'react';
import styled from 'styled-components';
import {Button, TextField} from "@mui/material";
import {AiOutlineInfoCircle} from "react-icons/ai";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  box-sizing: border-box;
`

const MainForm = styled.div`
  width: 400px;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
`

const StyledTextField = styled(TextField)`
  &&{
    width: 100%;
    margin-bottom: 20px;
  }
  && div{
    border-radius: 10px;
  }
`

const StyledButton = styled(Button)`
  && {
    background-color: deeppink;
    margin-top: 50px;
    font-weight: normal;
    width: 200px;
    text-transform: none;
    border-radius: 10px;
    padding: 8px;
  }
  &&:disabled{
    color: white;
  }
`

const StyledH1 = styled.h1`
  margin: 0 0 16px 0;
`
const StyledH3 = styled.h3`
  margin: 0 0 30px 0;
  color: gray;
`

const StyledH4 = styled.h4`
  margin: 0;
`
const StyledUl = styled.ul`
  margin: 0;
  padding-inline-start: 25px;
  color: grey;
`

const StyledLi = styled.li`
  margin-top: 10px;
`

const PasswordDescription = styled.div`
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
`

const PasswordAlert = styled.div`
  display:flex;
  padding: 12px;
  border: 1px solid gray;
  border-radius: 14px;
  text-align: left;
  color: gray;
`
const IconContain = styled.div`
  margin-top: 8px;
  margin-right: 6px;
`


const PasswordValidation = ()=>{
    const [firstpas,setFirstpas] = useState("");
    const [secpas,setSecpas] = useState("");
    const [isValid, setValid] = useState(true);
    const [isSame, setSame] = useState(true);

    const validator = (text) =>{
        setFirstpas(text);
        const qwerty = "qwerty";
        const digits = "123456";
        if(text.includes(qwerty) || text.includes(digits)){
            setValid(false);
            return;
        }

        let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-#$^+=!*()@%&_?/.])");
        if(reg.test(text)){
            setValid(true);
        }else{
            setValid(false);
        }
    }

    const SameChecker = (text) => {
        setSecpas(text);
        if(text === firstpas){
            setSame(true);
        }else{
            setSame(false);
        }
    }

    return(
        <AppWrapper>
            <MainForm>
            <StyledH1>Пароль</StyledH1>
            <StyledH3>Придумайте новый пароль</StyledH3>
            <div className="central_form">
                <form id="passwordForm">
                    <StyledTextField
                        error = {isValid ? false: true}
                        id="outlined-password-input"
                        label="Придумайте пароль*"
                        type="text"
                        helperText={!isValid ? "Пароль не соответствует требованиям безопасности": ""}
                        value={firstpas}
                        onChange={(text) =>{validator(text.target.value)}}
                    />

                    <StyledTextField
                        error = {isSame ? false: true}
                        id="outlined-password-input"
                        label="Повторите пароль*"
                        type="password"
                        helperText={!isSame ? "Пароли разные": ""}
                        value={secpas}
                        onChange={(text) =>{SameChecker(text.target.value)}}
                    />
                </form>
                <PasswordDescription>
                    <StyledH4>Пароль должен содержать:</StyledH4>
                    <StyledUl>
                        <StyledLi>латинские буквы</StyledLi>
                        <StyledLi>1 заглавную латинскую букву</StyledLi>
                        <StyledLi>цифры от 0-9</StyledLi>
                        <StyledLi>символы (#$^+=!*()@%&_?-.)</StyledLi>
                        <StyledLi>запрет последовательности букв (qwerty), цифр (123456)</StyledLi>
                    </StyledUl>
                </PasswordDescription>
                <PasswordAlert>
                    <IconContain>
                        <AiOutlineInfoCircle style = {{width:"25", height: "25"}}/>
                    </IconContain>
                    Введенный пароль будет являться паролем для выпущенной ЭЦП.<br/>
                    Запомните введенные данные!
                </PasswordAlert>
                <StyledButton form="passwordForm" type="button" variant="contained" disabled={firstpas === "" || secpas === "" || !isValid || !isSame}>Подтвердить</StyledButton>
            </div>
            </MainForm>
        </AppWrapper>
    )
}

export default PasswordValidation;