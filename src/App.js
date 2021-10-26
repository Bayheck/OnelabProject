import StyledApp from "./StyledApp";
import Header from './main/header/Header';
import Subheader from './main/subheader/Subheader';
import SliderSlick from './main/slickslider/SliderSlick';
import Cards from './main/cards/Cards';
import Calculator from "./main/calculator/Calculator";

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