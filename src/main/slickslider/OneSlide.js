import buy from "../../assets/SlickSlider/buy.png";
import StyledOneSlide from "../styled/styledSliderSlick/StyledOneSlide";

const OneSlide = () =>{
    return(
        <StyledOneSlide>
            <div>
                <div className="bankName">
                    <span>Forte</span> - Банк
                </div>
                <div className="prize">
                    До 3 000 000 ₸
                </div>
                <div className="catch">
                    Покупки без процентов
                </div>
                <button className="detailsButton">
                    Подробнее
                </button>
            </div>
            <div className="imgBlock">
                <img src={buy} alt="shopping"  width="454px" height="397px"/>
            </div>
        </StyledOneSlide>
    )
}

export default OneSlide;