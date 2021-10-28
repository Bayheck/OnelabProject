import StyledMobileAd from "../styled/StyledMobileAd/StyledMobileAd";
import apple from "../../assets/MobileAd/apple.png";
import google from "../../assets/MobileAd/google.png";
import iphone from "../../assets/MobileAd/iphone.png";

const MobileAd = () =>{
    return(
        <StyledMobileAd>
            <div className="content">
                <h5>Попробуйте мобильное приложение Forte</h5>
                <ul>
                    <li>Оплата платежей</li>
                    <li>Денежные переводы</li>
                    <li>Управление лимитами</li>
                </ul>
                <div className="downloadButtons">
                    <a href="https://apps.apple.com/app/forte/id1501520153">
                        <img src={apple} alt="apple card"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=kz.forte.app.store">
                        <img src={google} alt="google card"/>
                    </a>
                </div>
                <img className="iphone" src={iphone} alt="iphone"/>
            </div>
        </StyledMobileAd>
    )
}

export default MobileAd;