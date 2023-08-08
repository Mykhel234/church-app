import React, { useState } from 'react';
import style from "styled-components"
import {NavLink, Link} from "react-router-dom"
// import {FcBriefcase} from "react-icons/fc"
// import {FiSearch} from "react-icons/fi"
import {IoIosMenu} from "react-icons/io"
import { FiXCircle } from "react-icons/fi";
// import { animateScroll as Scroll, Link } from "react-scroll";

const Header1 = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  

    console.log(isOpen)

  return (
    <>
        <Container>
            <Wrapper>
                <LogoWrap to={"/"}>
                    <Logo src={"/images/Church-Logo.png"}/>
                    <Text>FAITH & HOPE</Text>
                </LogoWrap>
                <Navigations>
                    <Navs to={"/"}>Home</Navs>
                    <Navs to={"/about"}>About Us</Navs>
                    <Navs to={"/activities"}>Activities</Navs>
                    <Navs to={"/faith"}>Faith Corner</Navs>
                    <Navs to={"/support"}>Donations</Navs>
                
                </Navigations>
                <IconWrapper>
                    {isOpen ? (<Icon2 size={"40px"} onClick={handleClick}/>) : (<Icon size={"40px"} onClick={handleClick}/>)}
                
    
                    <Button>CONTACT A PRIEST</Button>
                </IconWrapper>
           
            </Wrapper>
        </Container>
        {!isOpen ? null : (
            <Div>
                <Navs to={"/"} onClick={handleClick}>Home</Navs>
                <Navs to={"/about"} onClick={handleClick}>About Us</Navs>
                <Navs to={"/activities"} onClick={handleClick}>Activities</Navs>
                <Navs to={"/faith"} onClick={handleClick}>Faith Corner</Navs>
                <Navs to={"/support"} onClick={handleClick}>Donations</Navs>
            </Div>
        )}
    </>
  )
}

export default Header1

const Container = style.div`
width: 100%;
height: 90px;
// background: red;
backdrop-filter: blur(100px);
// -webkit-backdrop-filter: blur(12px);
color: white;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Alice', serif;
padding-top: 10px;
position: fixed;
z-index: 1;
`
const Wrapper = style.div`
width: 90%;
height: 100px;
// background: yellow;
display: flex;
justify-content: space-between;
align-items: center;
`
const LogoWrap = style(Link)`
width: 110px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-decoration: none;
color: white;
// background: red;
`
const Navigations = style.div`
width: 50%;
height: 50px;
// background: white;
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 764px) {
    display: none;
};
`
// const IconsWrap = style.div`
// width: 20%;
// height: 50px;
// // background: white;
// display: flex;
// align-items: center;
// justify-content: space-between;
// div {
//     display: flex;
//     // background: white;
//     flex: 1;
//     justify-content: space-around;
//     @media screen and (max-width: 652px) {
//        flex-direction: row-reverse;
//      };
// };
// @media screen and (max-width: 998px) {
//     width: 30%;
// }
// @media screen and (max-width: 836px) {
//     width: 40%;
// };
// @media screen and (max-width: 736px) {
//     width: 45%;
// };
// @media screen and (max-width: 652px) {
//     width: 25%;
//  };
//  @media screen and (max-width: 500px) {
//     width: 35%;
//  };
//  @media screen and (max-width: 500px) {
//     width: 40%;
//  };
// `
const Logo = style.img`
width: 70px;
height: 70px;
// background: blue;
border-radius: 100%;
object-fit: cover;
`
const Text = style.div``
const Navs = style(NavLink)`
text-decoration: none;
color: white;
:hover {
    border-bottom: solid red 2px;
    // transition: all 100ms;
}
&.active {
    border-bottom: solid red 2px;
    transition: all 250ms;
};
div{
   display: none;
    :hover {
        display: block;
        transition: all 950ms;
    }
};
:hover {
    transition: all 950ms;
    div{
        display: block;
        position: absolute;
        left: 265px;
        // width: 300px;
        // height: 200px;
        background: grey;
        z-index:1;
        margin-top: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 50px 50px;
        a {
            :hover {
                cursor: pointer;
                color: red;
            }
        }
    };
}

`
const Icon2 = style(FiXCircle)`
    display: none;
    color: rgba(227,157,27,0.7);
    margin: 0 20px;
    :hover{
        cursor: pointer;
        transform: scale(1.09);
        transition: all 550ms;
    };
    @media screen and (max-width: 764px) {
        display: block;
        :hover{
            cursor: pointer;
            transform: scale(1.09);
            transition: all 550ms;
        };
    };
    @media screen and (max-width: 526px) {
        margin: 0 10px;
    }
`
const Icon = style(IoIosMenu)`
margin: 0 20px;
display: none;
color: rgb(227,157,27,0.9);
:hover{
    cursor: pointer;
    transform: scale(1.09);
    transition: all 550ms;
};
@media screen and (max-width: 764px) {
    display: block;
    :hover{
        cursor: pointer;
        transform: scale(1.09);
        transition: all 550ms;
    };
};
@media screen and (max-width: 526px) {
    margin: 0 10px;
}
`
const Div = style.div`
display: none;

@media screen and (max-width: 764px) {
    display: block;
    position: absolute;
    top: 108px;
    left: 10px;
    width: 230px;
    height: 230px;
    padding: 20px 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    backdrop-filter: blur(100px);
    position: fixed;
    cursor: pointer;
}
`
// const Icon1 = style(FcBriefcase)`
// :hover{.,k
//     cursor: pointer;
//     transform: scale(1.09);
//     transition: all 550ms;
// }
// `
// const Icon2 = style(FiSearch)`
// :hover{
//     cursor: pointer;
//     transform: scale(1.09);
//     transition: all 550ms;
// }
// `
const Button = style.button`
padding: 14px 12px;
border-radius: 3px;
border: 0;
color: white;
background-color: #E39D1B;
:hover{
    cursor: pointer;
    transform: scale(1.04);
    transition: all 750ms;
};
@media screen and (max-width: 468px) {
   display: none;
};

`
const IconWrapper = style.div`
display: flex;
// background: red;
`
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``