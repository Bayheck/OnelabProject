import StyledBanner from "../styled/styledBanner/StyledBanner";
import banner from "../../assets/Banner/Banner.png";

const Banner = () =>{
    return(
        <StyledBanner>
            <div className="content">
                <div>
                    <div className="bankName">
                        <span>Forte</span> - <span>Банк</span> - <span>Кредиты</span> - Экспресс-кредит
                    </div>
                    <div className="prize">
                        Экспресс-кредит
                    </div>
                    <div className="catch">
                        Кредит без залога
                    </div>
                    <button className="detailsButton">
                        Получить кредит
                    </button>
                </div>
                <div className="imgBlock">
                    <img src={banner} alt="shopping"/>
                </div>
                <button className="mobileButton">Получить кредит</button>
            </div>
        </StyledBanner>
    )
}

export  default Banner;