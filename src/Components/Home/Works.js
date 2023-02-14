import React from 'react'
import style from 'styled-components'

const Works = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Image src={"images/Jesus.jpg"}/>
                <Text><div>Visiting the sacred places to pray & praise</div></Text>
            </Left>
            <Right>
                <div className='container'>
                <span>WORK OF THE CHURCH</span>
                <div className='bold'>We preach the gospel in every sermon</div>
                <p>Qadipiscing elit, sed do eiusmod tempor incididunt ut labore eli sed do eiu.</p>
                <p className='text'>
                Qadipiscing elit, sed do eiusmod tempor incididunt ut labore eli sed do eiuQadipiscing elit, sed do eiusmod tempor incididunt ut labore eli sed do eiu. tempor incididunt ut labore eli sed do eiuQadipiscing elit, sed do eiusmod tempor incididunt tempor incididunt ut labore eli sed do eiuQadipiscing elit, sed do eiusmod tempor incididunt tempor incididunt ut labore eli sed do eiuQadipiscing elit, sed do eiusmod tempor incididunt
                </p>
                <div className='border'>
                    
                    <span className='text'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
                </div>
                <button>ABOUT US</button>
                </div>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Works

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: rgb(242, 242, 242);
// background: rgb(206, 206, 206);
background: rgb(239, 231, 220);
// background: rgb(242, 239, 234);
// color: white;
`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-around;
// flex-direction: row-reverse;
align-items: center;
// background: cyan;
padding: 40px 0;
@media screen and (max-width: 932px){
    flex-direction: column;
}
`
const Left = style.div`
width: 50%;
height: 100%;
// background: red;
display: flex;
position: relative;
// align-items: center;
// justify-content: center;
@media screen and (max-width: 932px){
    margin-bottom: 60px;
    width: 100%;
}
`
const Right = style.div`
width: 60%;
// height: 100vh;
// background: blue;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 932px){
    width: 100%;
};
div.container {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: start;
    // background: red;
    span {
        font-weight: bold;
        margin-bottom: 15px;
    };
    div.bold {
        font-size: 40px;
        font-weight: bold;
        width: 90%;
        line-height: 40px;
        @media screen and (max-width: 560px){
        font-size: 35px;
        line-height: 35px;
        };
        @media screen and (max-width: 560px){
            font-size: 30px;
            line-height: 30px;
            };
    };
    p {
        font-weight: 500;
    };
    p.text {
        font-weight: 300;
        margin-top: -5px;
    };
    div.border {
        width: 100%;
        height: 100px;
        // background: blue;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 5px solid black;
        margin-top: 10px;
        
        span.text {
            font-weight: 400;
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    };
    button {
        margin-top: 40px;
        width: 300px;
        height: 60px;
        border: 0;
        border-radius: 5px;
        background-color: #E39D1B;
        color: white;
        @media screen and (max-width: 364px){
           width: 250px
            };
    }
};
`
const Image = style.img`
width: 90%;
height: 80%;
object-fit: cover;
`
const Text = style.div`
width: 40%;
height: 30%;
background: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 50px;
bottom: 0;
@media screen and (max-width: 932px){
    position: absolute;
    right: 84px;
    
};
div {
    width: 90%;
    font-size: 28px;
    font-weight: bold;
    line-height: 32px;
    text-align: center;
    @media screen and (max-width: 1180px){
    font-size: 25px;
    };
    @media screen and (max-width: 1052px){
        font-size: 20px;
    };
   @media screen and (max-width: 932px){
    font-size: 42px;
    line-height: 45px;
};
@media screen and (max-width: 932px){
    font-size: 38px;
    line-height: 45px;    
};
@media screen and (max-width: 728px){
    font-size: 30px;
    line-height: 40px;
};
@media screen and (max-width: 582px){
    font-size: 25px;
    line-height: 30px;
};
@media screen and (max-width: 478px){
    font-size: 20px;
    line-height: 25px;
};
@media screen and (max-width: 384px){
    font-size: 16px;
    line-height: 18px;
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
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``