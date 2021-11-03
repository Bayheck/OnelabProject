import StyledApp from "./StyledApp";
import Header from './main/header/Header';
import Subheader from './main/subheader/Subheader';
import SliderSlick from './main/slickslider/SliderSlick';
import Cards from './main/cards/Cards';
import Calculator from "./main/calculator/Calculator";
import TransferInfo from "./main/transferinfo/TransferInfo";
import MobileAd from "./main/mobilead/MobileAd";
import Converter from "./main/converter/Converter";
import Footer from "./main/footer/Footer";

const App = () =>{
    return(
        <StyledApp>
            <div>
                <Header></Header>
                <Subheader></Subheader>
                <SliderSlick></SliderSlick>
                <Cards></Cards>
                <Calculator></Calculator>
                <TransferInfo></TransferInfo>
                <MobileAd></MobileAd>
                <Converter></Converter>
                <Footer></Footer>
            </div>
        </StyledApp>
    )
}

export default App;