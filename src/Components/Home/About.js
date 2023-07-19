import React from 'react'
import style from 'styled-components'
import {FaRegArrowAltCircleRight} from "react-icons/fa"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Container>
        <Wrapper>
            <TextWrap>
                <span className='modern'>Our Church</span>
                <div className='title' style={{textAlign: "center"}}>Faith and Hope are two solid companions, On which Christ has built His Church, and the gates of hell shall not prevail against it. WELCOME!</div>
                <span className='position'>Rev. Fr. Leon Houssoeu <div>Parish Priest</div></span>
                
            </TextWrap>

            <Divisions>
            <Aims to='/about'>
                <div className='division'>
                    <div><img src='images/BGM.jpg'/></div>
                    <span>Our Mission <button><FaRegArrowAltCircleRight size={"25px"} color={"white"}/></button></span>
                </div>
            </Aims>
            <Aims to="/">
                <div className='division'>
                    <div><img src='images/BG3.jpg'/></div>
                    <span>Our Spirituality <button><FaRegArrowAltCircleRight size={"25px"} color={"white"}/></button></span>
                </div>
            </Aims>
            <Aims to={"/"}>
                <div className='division'>
                    <div><img src='images/BG1.jpg'/></div>
                    <span>Our Community <button><FaRegArrowAltCircleRight size={"25px"} color={"white"}/></button></span>
                </div>
            </Aims>
            </Divisions>
        </Wrapper>
    </Container>
  )
}

export default About

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #1D1008;
padding: 50px 0;
`
const Wrapper = style.div`
width: 90%;
height: 100%;
background: #B68E79;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const TextWrap = style.div`
background: #1D1008;
color: white;
// width: 50%;
height: 40%;
display: flex;
flex-direction: column;
// justify-content: space-around;
align-items: center;
font-family: 'Alice', serif;
text-algn: center;
div.title {
    font-size: 50px;
    width: 70%;
    height: 60%;
    // background: red;
    line-height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align-center;
    @media screen and (max-width: 1040px){
        font-size: 45px;
    };
    @media screen and (max-width: 936px){
        font-size: 35px;
        width: 90%;
    };
    @media screen and (max-width: 742px){
        font-size: 30px;
        line-height: 35px;
        width: ;
    };
    @media screen and (max-width: 543px){
        font-size: 25px;
        
    };
};
span.modern {
    margin: 20px 0;
    display: none;
};
span.position {
    margin: 15px;
    text-align: center;
    font-weight: bold;
    div {
        font-weight: 100;
        // color: red;
    }
}
`
const Aims = style(Link)`
width: 100%;
height: 60%;
background: #1D1008;
display: flex;
align-items: center;
justify-content: space-around;
padding: 30px 0;
text-decoration: none;
div.division {
    width: 80%;
height: 380px;
// background: blue;
// border-radius: 5px;
display: flex;
flex-direction: column;
color: white;

div {
    width: 100%;
    height: 300px;
    background: red;
    border-radius: 5px;
    img{
        width: 100%;
        height: 300px;
        object-fit: cover;
    };
};
span {
    width: 100%;
    height: 50px;
    border-bottom: solid 1px lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        text-decoration: none;
        border: 0;
        background: transparent;
        display: none;
    };
}
:hover {
    cursor: pointer;
    
    span{
        border-bottom: solid 2px white;
        transition: all 450ms;
    };
    button {
        display: block;
        transition: all 450ms;
    };
};
}
`
const Divisions = style.div`
width: 100%;
// height: 100vh;
display: flex;
@media screen and (max-width: 882px){
    flex-direction: column;
};
}
`
const Icon = style(FaRegArrowAltCircleRight)`
color: white;
`
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``