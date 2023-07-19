import React from 'react'
import style from "styled-components"

const Support = () => {
  return (
    <Container>
        <Wrapper>
            <Contents>
                <span>THE GRACE OF GIVING</span>
                <div className='title'>A generous soul will prosper. God bless our donators!</div>
                <div className='buttonWrap'>
                    <button className='gold'>GIVE NOW</button>
                    <button className='white'>WAYS TO NOW</button>
                </div>
            </Contents>
            <FreeZone></FreeZone>
        </Wrapper>
    </Container>
  )
}

export default Support

const Container = style.div`
width: 100%;
height: 100vh;
background: linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url("/images/BG2.jpg");
background-repeat: no-repeat;
background-position: top;
display: flex;
justify-content: center;
align-items: center;
color: white;
`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
// background: blue;
`
const Contents = style.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
// align-items: center;
justify-content: center;
// background: lavender;
@media screen and (max-width:1070px){
    width: 80%;
};
@media screen and (max-width:984px){
    width: 90%;
};
@media screen and (max-width:672px){
    width: 100%;
};
span {
    font-weight: bold;
};
div.title {
    font-weight: bold;
    font-size: 50px;
    line-height: 50px;
    // width: 80%;
    margin-bottom: 20px;
    @media screen and (max-width:584px){
        font-size: 45px;
    };
};

button.gold {
    padding: 20px 70px;
    margin-right: 20px;
    border: solid 3px #E39D1B;
    border-radius: 3px;
    font-weight: bold;
    background-color: #E39D1B;
    color: white;
    @media screen and (max-width:524px){
        padding: 20px 50px;
    };
    @media screen and (max-width:434px){
        padding: 20px 40px;
    };
    @media screen and (max-width:398px){
        padding: 15px 30px;
    };
    @media screen and (max-width:352px){
        padding: 15px 20px;
    };
    :hover {
        background: rgb(206, 142, 22);
    };
};
button.white {
    padding: 20px 70px;
    border: solid 3px white;
    border-radius: 3px;
    font-weight: bold;
    background-color: transparent;
    color: white;
    @media screen and (max-width:524px){
        padding: 20px 50px;
    };
    
    @media screen and (max-width:434px){
        padding: 20px 40px;
    };
    @media screen and (max-width:498px){
        padding: 15px 30px;
    };
    @media screen and (max-width:352px){
        padding: 15px 20px;
    };
    :hover {
        background: white;
        color: black;
    };
    
};
`
const FreeZone = style.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
// background: pink;
@media screen and (max-width:1050px){
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
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``