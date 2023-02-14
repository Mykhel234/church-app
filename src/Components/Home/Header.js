import React from 'react'
import style from "styled-components"
import {NavLink, Link} from "react-router-dom"
import {FcBriefcase} from "react-icons/fc"
import {FiSearch} from "react-icons/fi"
import {IoIosMenu} from "react-icons/io"

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <LogoWrap to={"/"}>
                <Logo src={"images/Church-Logo.png"}/>
                <Text>FAITH & HOPE</Text>
            </LogoWrap>
            <Navigations>
                <Navs to={"/"}>
                    <span>Home</span>
                    <div>
                        <a>Sample</a>
                        <a>Sample</a>
                        <a>Sample</a>
                        <a>Sample</a>
                        <a>Sample</a>
                        <a>Sample</a>
                    </div>
                </Navs>
                <Navs to={"/a"}>Pages</Navs>
                <Navs to={"/b"}>Blog</Navs>
                <Navs to={"/c"}>Donations</Navs>
                <Navs to={"/d"}>Shop</Navs>
                <Navs to={"/e"}>Contacts</Navs>
            </Navigations>
            <IconsWrap>
                <Icon size={"40px"}/>
                <div>
                <Icon1 size={"40px"}/>
                <Icon2 size={"35px"}/>
                </div>
                <Button>GIVE NOW</Button>
            </IconsWrap>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = style.div`
width: 100%;
height: 100px;
// background: #0B080B;
// background: transparent;
color: white;
display: flex;
justify-content: center;
font-family: 'Alice', serif;
margin-top: 10px;
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
color: white
`
const Navigations = style.div`
width: 45%;
height: 50px;
// background: white;
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 836px) {
    display: none;
}
`
const IconsWrap = style.div`
width: 25%;
height: 50px;
// background: white;
display: flex;
align-items: center;
justify-content: space-between;
div {
    display: flex;
    // background: white;
    flex: 1;
    justify-content: space-around;
    @media screen and (max-width: 652px) {
       flex-direction: row-reverse;
     };
};
@media screen and (max-width: 998px) {
    width: 30%;
}
@media screen and (max-width: 836px) {
    width: 40%;
};
@media screen and (max-width: 736px) {
    width: 45%;
};
@media screen and (max-width: 652px) {
    width: 25%;
 };
 @media screen and (max-width: 500px) {
    width: 35%;
 };
 @media screen and (max-width: 500px) {
    width: 40%;
 };
`
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
const Icon = style(IoIosMenu)`
display: none;
:hover{
    cursor: pointer;
    transform: scale(1.09);
    transition: all 550ms;
};
@media screen and (max-width: 836px) {
    display: block;
    :hover{
        cursor: pointer;
        transform: scale(1.09);
        transition: all 550ms;
    };
};
`
const Icon1 = style(FcBriefcase)`
:hover{
    cursor: pointer;
    transform: scale(1.09);
    transition: all 550ms;
}
`
const Icon2 = style(FiSearch)`
:hover{
    cursor: pointer;
    transform: scale(1.09);
    transition: all 550ms;
}
`
const Button = style.button`
padding: 15px 40px;
border-radius: 3px;
border: 0;
color: white;
background-color: #BF994D;
:hover{
    cursor: pointer;
    transform: scale(1.04);
    transition: all 750ms;
};
@media screen and (max-width: 652px) {
   display: none;
};
`
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``