import React from 'react'
import style from 'styled-components'
import {Link} from 'react-router-dom'

const ArticlePage = () => {
  return (
    <Container>
        <Wrapper>
            <Heading>Faith Corner</Heading>
            <Contents>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
                <Section to ={"/article/Hope"}>
                    <img src={"images/BG3.jpg"}/>
                    <div className='wrap'>
                        <span>Faith Corner . APril 6, 2023</span>
                        <div className='text'>Hope leads us through life against darkness</div>
                    </div>
                </Section>
            </Contents>
        </Wrapper>
    </Container>
  )
}

export default ArticlePage

const Container = style.div`
width: 100%;
// height: 100vh;
background: #F8F5EB;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
`
const Wrapper = style.div`
width: 90%;
height: 100%;
// background: lavender;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Heading = style.div`
width: 100%;
// height: 20%;
padding: 50px 0;
// background: #00040;
font-size: 40px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
`
const Contents = style.div`
width: 100%;
// height: 80%;
// background: blue;
display: flex;
// flex-direction: column;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
const Section = style(Link)`
width: 340px;
// height: 90%;
// background: red;
border-radius: 5px;
margin-top: 50px;
text-decoration: none;
color: black;
:hover {
    img{
        cursor: pointer;
        transform: scale(1.06);
        transition: all 1s ease-in-out;
    };
    div.wrap {
        div.text{
            cursor: pointer;
            transform: scale(1.06);
            transition: all 1s ease-in-out;
        };
    };
};
img {
    width: 340px;
    // height: 68%;
    border-radius: 5px;
    // background: green;
    object-fit: cover;
};
div.wrap {
    width: 100%;
    height: 30%;
    // padding: 20px 0; 
    // background: cyan;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: space-around;
    margin-top: 10px;
    div.text {
        font-size: 25px;
        font-weight: bold;
        margin-top: 5px;
    };
    span {
        font-size: small;
        font-weight: bold;
        margin-top: 20px;
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