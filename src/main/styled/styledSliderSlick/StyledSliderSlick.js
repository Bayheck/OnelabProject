import styled from "styled-components";
import back1 from "../../../assets/SlickSlider/Back1.png";
import back2 from "../../../assets/MobileVersion/Mobileversionback.png";
import leftArray from "../../../assets/SlickSlider/left_button_arrow.svg";
import rightArray from "../../../assets/SlickSlider/right_button_arrow.svg";
import dot from "../../../assets/SlickSlider/dots.svg";
import inactive from "../../../assets/SlickSlider/inactive.svg";


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

  @media screen and (max-width: 415px) {
    & {
      max-width: 380px;
      width: 100%;
      background-size:contain;
      background-image: url(${back2});
      background-repeat: no-repeat;
    }
    .slick-slider{
      max-width: 380px;
      width: 100%;
    }
    
    .slick-list{
      padding: 32px 26px 16px 16px;
      box-sizing: content-box;
    }
    
    .slick-dots{
      text-align: center;
      bottom: 110px;
    }
  }
`

export default StyledSlick;