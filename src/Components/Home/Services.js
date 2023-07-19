import React from 'react'
import style from 'styled-components'

const Services = () => {
  return (
    <Container>
        <Wrapper>
            <TextWrap>
                <div>OUR SERVICES</div>
                <span style={{textAlign: "center"}}>Loving God, helping others and serving the world</span>
            </TextWrap>
            <SectionWrap>
                <div>
                <Section>
                    <div><img src={"/images/chapel.png"}/></div>
                    <span>Holy Mass</span>
                    <p>Sunday - 6.30am & 8.30am</p>
                    <p>Monday to Saturday - 6.30am</p>
                    <p>Friday - 6.30am & 6.30pm</p>
                </Section>
                <Section>
                    <div><img src={"/images/scripture.png"}/></div>
                    <span>Catechesis</span>
                    <p>Saturdays - 3.45pm & 6.00pm</p>
                    <p>Sundays - 2.45pm to 5.00pm</p>
                    <p>Adult Class - after Second Mass on Sunday</p>
                </Section>
                
                
                
                </div>
                <div>
                <Section>
                    <div><img src={"/images/praying.png"}/></div>
                    <span>Prayers</span>
                    <p>Exposition Of Blessed Sacrament - Fridays 7.30am & 5.30pm</p>
                </Section>
                <Section>
                    <div><img src={"/images/cross.png"}/></div>
                    <span>Sacraments</span>
                    <p>Confessions- after Weekday Masses & on Saturdays by 7.30am to 9.00am</p>
                </Section>
                
                </div>
            </SectionWrap>
            <Button>ALL SERVICES</Button>
        </Wrapper>
    </Container>
  )
}

export default Services

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #E5D3C6;
padding: 20px 0;
`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
// background: blue;
padding: 20px 0;
`
const TextWrap = style.div`
width: 100%;
height: 40%;
// background: green;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Alice', serif;
text-algn: center;
padding: 20px 0;
div {
    margin: 20px 0;
    @media screen and (max-width: 444px){
        margin-bottom: 10px;
    }
};
span {
    font-size: 50px;
    width: 50%;
    height: 60%;
    // background: red;
    line-height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align-center;
    @media screen and (max-width: 1005px){
        // font-size: 45px;
        width: 55%;
    };
    @media screen and (max-width: 905px){
        // font-size: 35px;
        width: 70%;
    };
    @media screen and (max-width: 706px){
        // font-size: 30px;
        // line-height: 35px;
        width: 80%;
    };
    @media screen and (max-width: 582px){
        font-size: 45px;
        width: 90%;
    };
    @media screen and (max-width: 570px){
        font-size: 35px;
        line-height: 35px;
    };
};
`
const SectionWrap = style.div`
width: 100%;
height: 60%;
// background: pink;
display: flex;
justify-content: space-around;
align-items: center;
// padding: 20px 0;
@media screen and (max-width: 816px){
    flex-direction: column;
};
div{
    display: flex;
    width: 100%;
    // background: red;
    @media screen and (max-width: 456px){
        flex-direction: column;
    };
}
`
const Section = style.div`
width: 20%;
height: 300px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
// background: pink;
padding: 20px 0;
margin: 25px 0;
@media screen and (max-width: 816px){
    width: 90%
};
span{
    font-weight: bold;
    margin-bottom: 20px;
};
div {
    width: 100%;
    height: 150px;
    // background: blue;
    margin-bottom: 5px;
    img{
        width: 100%;
        height: 150px;
        object-fit: contain;
    }
};
p {
    width: 80%;
    text-align: center;
    margin-top: -12px;
    @media screen and (max-width: 1147px){
        margin-top: 5px;
    }
}
`
const Button = style.button`
padding: 15px 80px;
border: 0;
border-radius: 3px;
// background: #1D1008;
color: white;
background-color: #E39D1B;
:hover{
    cursor: pointer;
    transform: scale(1.04);
    transition: all 750ms;
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