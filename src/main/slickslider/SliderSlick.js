import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OneSlide from "./OneSlide";
import StyledSlick from "../styled/styledSliderSlick/StyledSliderSlick";

const SliderSlick = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <StyledSlick>
            <Slider {...settings}>
                <div>
                    <OneSlide/>
                </div>
                <div>
                    <OneSlide/>
                </div>
                <div>
                    <OneSlide/>
                </div>
                <div>
                    <OneSlide/>
                </div>
            </Slider>
        </StyledSlick>
    )
}

export default SliderSlick;