import styled from 'styled-components';

const StyledForm = styled.form`
  &{
    width: 100%;
    margin-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
  }
  
  fieldset {
    width: 100%;
    text-align: center;
    border: none;
    padding: 0;
  }

  input[type="radio"] {
    display: none;

    + label {
      margin: 0 16px 0 16px;

      &::before {
        transition: all 250ms cubic-bezier(.4, .25, .3, 1);
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(48, 48, 48, 1);
        border: 0px solid rgba(48, 48, 48, 1);
        position: absolute;
        top: 0px;
        transform: translate(-50%, 50%);
        cursor: pointer;
      }

      &::after {
        transition: all 250ms cubic-bezier(.4, .25, .3, 1);
        content: "";
        width: 0px;
        height: 0px;
        border-radius: 50%;
        background-color: rgba(48, 48, 48, 1);
        position: absolute;
        top: 0px;
        transform: translate(-50%, 50%);
      }
    }

    &:checked + label {
      &::before {
        position: absolute;
        top: -10px;
        background-color: transparent;
        width: 16px;
        height: 16px;
        border-width: 1px;
      }

      &::after {
        width: 8px;
        height: 8px;
      }
    }
  }
`

export default StyledForm;
