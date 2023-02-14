import React from 'react'
import style from 'styled-components'

const WhatWeDo = () => {
  return (
    <Container>
        <Wrapper>
            <Content>
                    <span>WHAT WE DO</span>
                    <div>We strive for faithful <br/>life & well-being</div>
            </Content>
            <Wrap>
                <Left>
                    <p><span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolor.</p>
                        <Profile>
                            <img src={"images/bg1.jpg"}/>
                            <section>
                                <h3>Roger Moore</h3>
                                <span>Priest</span>
                            </section>
                        </Profile>
                    </Left>
                    <Right>
                        <div>
                            <p>
                            Qnsectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, eiusm od tempor ut labore.
                            </p>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.</p>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.</p>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.</p>
                        </div>
                        <div>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do od tempor ut labore.</p>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.</p>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.</p>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.</p>
                        </div>
                    </Right>
            </Wrap>
        </Wrapper>
    </Container>
  )
}

export default WhatWeDo

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(155, 144, 144);
padding: 60px 0;
// color: rgb(73, 73, 73);
`
const Wrapper = style.div`
// margin-top: 80px;
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Content = style.div`
width: 100%;
height: 25%;
// background: Lavender;
display: flex;
flex-direction: column;
padding: 10px 0;
span {
    font-weight: bold;
};
div {
    font-weight: bold;
    font-size: 50px;
    line-height: 57px;
};
`
const Left = style.div`
width: 33%;
height: 100%;
// background: blue;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
@media screen and (max-width: 932px){
    width:100%;
    align-items: start;
};
p {
    font-size: 20px;
    margin-top: -5px;
    span {
        font-size: 32px;
        font-weight: bold;
        padding: 0;
        margin: 0 2px;
        // background: red;
    }
};
`
const Right = style.div`
width: 70%;
height: 100%;
// background: red;
display: flex;
align-items: center;
justify-content: space-evenly;
@media screen and (max-width: 932px){
    flex-direction: column;
    width: 100%;
};
div {
    width: 45%;
    height: 100%;
    // background: grey;
    font-size: 20px;
    @media screen and (max-width: 932px){
        width:100%;
    };
    p {
        margin-top: -2px;
    };
    
};
`

const Profile = style.div`
// background: grey;
display: flex;
width: 100%;
margin-top: 20px;
display: flex;
// justify-content: center;
align-items: center;
@media screen and (max-width: 932px){
    display: none;
};
img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: white;
};
section {
    margin: 0 20px;
    // background: yellow;
    height: 60px;
    h3 {
        margin: 0;
    };
};
`

const Wrap = style.div`
display: flex;
width: 100%;
height: 80%;
@media screen and (max-width: 932px){
    flex-direction: column;
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
// const Container = style.div``