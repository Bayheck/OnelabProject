import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import back1 from '../../assets/SlickSlider/Back1.png';
import dot from '../../assets/SlickSlider/dots.svg';
import inactive from '../../assets/SlickSlider/inactive.svg';
import buy from '../../assets/SlickSlider/buy.png';
import leftArray from '../../assets/SlickSlider/left_button_arrow.svg';
import rightArray from '../../assets/SlickSlider/right_button_arrow.svg';

const StyledSlick = styled.div`
    &{
      background-image: url(${back1});
      width: 1920px;
      height: 400px;
      display: flex;
      justify-content: center;
    }
  .slick-slider{
    max-width: 1224px;
    width: 100%;
    height: 400px;
    position: relative;
  }
  
  .slick-prev{
    left: -70px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background-color: white;
  }
  
  .slick-next{
    right: -70px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background-color: white;
  }
  
  .slick-prev:before{
    background-image: url(${leftArray});
    background-size: 8px 14px;
    width: 8px;
    height: 14px;
    content: "";
    opacity: 1;
    display: inline-block;
  }
  
  .slick-next:before{
    background-image: url(${rightArray});
    background-size: 8px 14px;
    width: 8px;
    height: 14px;
    content: "";
    opacity: 1;
    display: inline-block;
  }
  
  .slick-list{
    height: 400px;
  }
  
  .slick-dots{
    bottom: 32px;
    text-align: left;
  }
  
  .slick-dots li{
    width: 44px;
    margin: 0 10px 0 0;
  }
  
  .slick-dots li button{
    padding: 0;
  }
  
  .slick-dots li.slick-active button:before{
    content: url(${dot});
  }
  
  .slick-dots li button:before{
    content: url(${inactive});
    opacity: 1;
  }
  
  .one-slide{
    display: flex;
    justify-content: space-between;
    color:#FFFFFF;
    padding: 0 1px 0 1px;
  }
  
  .bankname{
    margin: 32px 0;
    line-height: 14px;
    font-size: 12px;
  }
  
  span{
    text-decoration-line: underline;
  }

  .prize{
    margin: 0 0 24px 0;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
  }
  
  .catch{
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }
  
  .detailsButton{
    margin: 70px 0 0 0;
    background: #FFFFFF;
    border-radius: 4px;
    color: #9D2550;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    padding: 18px 32px 18px 32px;
    border: none;
  }
  
  .imgBlock{
    margin-right: 32px;
  }
  
`

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
                    <div className="one-slide">
                        <div >
                            <div className="bankname">
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
                    </div>
                </div>
                <div>
                    <div className="one-slide">
                        <div>
                            <div className="bankname">
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
                        <img src={buy} alt="shopping"  width="454px" height="397px"/>
                    </div>
                </div>
                <div>
                    <div className="one-slide">
                        <div>
                            <div className="bankname">
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
                        <img src={buy} alt="shopping"  width="454px" height="397px"/>
                    </div>
                </div>
                <div>
                    <div className="one-slide">
                        <div>
                            <div className="bankname">
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
                        <img src={buy} alt="shopping"  width="454px" height="397px"/>
                    </div>
                </div>
            </Slider>
        </StyledSlick>
    )
}

export default SliderSlick;