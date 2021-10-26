import StyledForm from "../styled/styledCards/StyledForm";

const RadioButtons = () =>{
    return(
    <StyledForm>
        <fieldset>
            <input type="radio" name="radio1" id="radio-1" value="radio-1"/>
            <label htmlFor="radio-1"></label>

            <input type="radio" name="radio1" id="radio-2" value="radio-2"/>
            <label htmlFor="radio-2"></label>

            <input type="radio" name="radio1" id="radio-3" value="radio-3"  defaultChecked/>
            <label htmlFor="radio-3"></label>
        </fieldset>
    </StyledForm>
    )
}

export default RadioButtons;