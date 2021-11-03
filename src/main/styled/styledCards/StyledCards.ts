import styled from "styled-components";

const StyledCards = styled.div`
  &{
    max-width: 1282px;
    width: 100%;
    margin: 64px auto;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }
  
  .cards{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;
  }
  
  h3{
    margin:0 0 10px 28px;
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
  }
  
  h4{
    margin: 0 0 16px 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
  }
  
  img{
    display: block;
  }
  
  .info{
    text-align: center;
    width: 288px;
    overflow-wrap: break-word;
    margin-left: 28px;
  }
  
  .text{
    margin-bottom: 16px;
  }
  
  button{
    margin-top: 35px;
  }
  
  ul{
    display: flex;
    align-items: center;
    padding: 0;
    margin: 48px 0 0 0;
    list-style: none;
  }
  
  li{
    display: flex;
  }

  @media screen and (max-width: 415px) {
    && {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    
    & .cards{
      justify-content: center;
    }
    
    .gold, .platinum{
      display: none;
    }
  }

  @media screen and (max-width: 320px) {
    &{
      margin-top: 40px;
      margin-bottom: 40px;
    }
    
    img{
      max-width: 80%;
      height: auto;
      margin: 0 auto;
    }
    
    & .info{
      margin: 0 auto;
    }
  }
`

export default StyledCards;