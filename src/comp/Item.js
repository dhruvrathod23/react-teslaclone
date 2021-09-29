import React from 'react'
//import ModelS from  '../images/model-s.jpg'
import Fade from 'react-reveal/Fade'

import styled from 'styled-components';
const Item = ({title, desc,backgroundImg,leftBtnText,rightBtntxt}) => {
    return (
        <Wrap bgImage = {backgroundImg}>
  <Fade bottom>

    <ItemText>
       
        <h1>{title}</h1>
        <p>{desc}</p>
    </ItemText>
    </Fade>
    <Buttons>
    <Fade bottom>
    <ButtonGroup>
        <LeftButton>{leftBtnText} </LeftButton>
        <RightButton>{rightBtntxt}</RightButton>

    </ButtonGroup>
    </Fade>
    <DownArrow src ="/images/down-arrow.svg" />
    </Buttons>

  </Wrap>
    )
}

export default Item;

const Wrap = styled.div`
        width:100vw;
        height:100vh;
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
        background-image: url('/images/model-s.jpg');
        flex-direction:column;
        justify-content:space-between; //vertical
        align-items:center; //horizontal
        display:flex;
    background-image: ${props => `url("/images/${props.bgImage}")`}
 `

 const ItemText = styled.div`
 
  padding-top:15vh;
  text-align:center;
 `

 const ButtonGroup = styled.div`

 display:flex; 
 margin-bottom:30px; 
 @media (max-width:768px){
    flex-direction:column;
 } 
 `

 const LeftButton = styled.div`
 background-color:rgba(23,26,32,0.8);
 height:40px;
 width:256px;
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:100px;
 font-size :12px;
 opacity:0.85;
 text-transfrom:uppercase;
 font-size:12px;
 cursor:pointer;
 margin:8px;

 `

 const  RightButton = styled(LeftButton)`

 color:black;
 background:white;
 `

 const DownArrow = styled.img`
 margin-top:20px;
 height :40px;
 animation: animateDown infinte 1.5s;
 margin-left: 45%;


`
const Buttons =styled.div``