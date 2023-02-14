import React from 'react'
import style from 'styled-components'
import {MdDoneAll} from 'react-icons/md'

const Mission = () => {
  return (
    <Container>
        <Wrapper>
            <Image>
                <img src={"images/BG3.jpg"}/>
            </Image>
            <TextWrap>
                <Heading>
                    <span>BASIC DOCTRINES</span>
                    <div>Our mission</div>
                </Heading>
                <Content>
                    <section>
                        <span><MdDoneAll size={"20px"} color={"#E39D1B"}/></span>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </section>
                    <section>
                        <span><MdDoneAll size={"20px"} color={"#E39D1B"}/></span>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </section>
                    <section>
                        <span><MdDoneAll size={"20px"} color={"#E39D1B"}/></span>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </section>
                    <section>
                        <span><MdDoneAll size={"20px"} color={"#E39D1B"}/></span>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </section>
                    <section>
                        <span><MdDoneAll size={"20px"} color={"#E39D1B"}/></span>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </section>
                </Content>
            </TextWrap>
        </Wrapper>
    </Container>
  )
}

export default Mission

const Container = style.div`
width: 100%;
// height: 90vh;
display: flex;
justify-content: center;
align-items: center;
// background-color: red;
padding: 100px 0;
@media screen and (max-width: 856px) {
    height: 100%;
};
`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
// background-color: blue;
@media screen and (max-width: 856px) {
    flex-direction: column;
};
`
const Image = style.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
// background-color: yellow;
// padding: 50px 0;
@media screen and (max-width: 856px) {
    width: 100%;
};
img {
    width: 90%;
    // height: 535px;
    height: 90%;
    object-fit: cover;
}
`
const TextWrap = style.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background-color: green;
@media screen and (max-width: 856px) {
    width: 100%;
};
`
const Heading = style.div`
width: 90%;
height: 20%;
display: flex;
flex-direction: column;
// align-items: center;
justify-content: center;
// background-color: grey;
padding: 20px 0;
span {
    font-weight: bold;
    // margin-bottom: 5px;
};
div {
    font-size: 50px;
    font-weight: bold;
    margin-top: -8px;
    @media screen and (max-width: 350px){
        font-size: 45px
    };
};
`
const Content = style.div`
width: 100%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
section {
    width: 90%;
    height: 18%;
    display: flex;
    // flex-direction: column;
    justify-content: space-around;
    align-items: center;
    // background-color: blue;
    margin: 10px 0;
    span {
        width: 30px;
        height: 100%;
        // border-radius: 100%;
        // background-color: red;
        display: flex;
        justify-content: start;
        align-items: start;
    };
    div {
        width: 90%;
        height: 100%;
        // background-color: blue;
    };
}
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