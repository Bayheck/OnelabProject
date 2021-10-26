import styled from 'styled-components';
import Header from './main/header/Header';
import Subheader from './main/subheader/Subheader';
import SliderSlick from './main/slickslider/SliderSlick';
import Cards from './main/cards/Cards';
import Calculator from "./main/calculator/Calculator";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  color: #1E2A41;
  overflow-x: hidden; 
  
  & div{
    justify-content: center;
    font-family: 'Rubik', sans-serif;
  }
`

const App = () =>{
    return(
        <StyledApp>
            <div>
                <Header></Header>
                <Subheader></Subheader>
                <SliderSlick></SliderSlick>
                <Cards></Cards>
                <Calculator></Calculator>
            </div>

        </StyledApp>
    )
}

export default App;