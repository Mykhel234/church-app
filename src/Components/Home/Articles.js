import React from 'react'
import style from 'styled-components'

const Articles = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <span>READ OUR BLOG</span>
                <div>Latest articles</div>
            </Top>
            <ContentWrap>
            <Left>
                <Image><img src={"images/BG3.jpg"}/></Image>
                <Content>
                    <Date>
                        <div>06</div><span>APR</span>
                    </Date>
                    <TextWrap>
                    <div>Love for our Lord is pure and unconditional</div>
                        <p>Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat.…</p>
                    </TextWrap>
                </Content>    
            </Left>
            <Right>
                <Section>
                    <Picture><img src={"/images/BG1.jpg"} /></Picture>
                    <Title>
                        <div className='heading'>HIS WILL <span>. Apr 5, 2022</span></div>
                        <div className='title'>We bring Heaven on Earth through Christ</div>
                    </Title>
                </Section>
                <Section>
                    <Picture><img src={"/images/BG3.jpg"} /></Picture>
                    <Title>
                        <div className='heading'>HIS WILL <span>. Apr 5, 2022</span></div>
                        <div className='title'>We bring Heaven on Earth through Christ</div>
                    </Title>
                </Section>
                <Section>
                    <Picture><img src={"/images/BGM.jpg"} /></Picture>
                    <Title>
                        <div className='heading'>HIS WILL <span>. Apr 5, 2022</span></div>
                        <div className='title'>We bring Heaven on Earth through Christ</div>
                    </Title>
                </Section>
                <Section>
                    <Picture><img src={"/images/BGM.jpg"} /></Picture>
                    <Title>
                        <div className='heading'>HIS WILL <span>. Apr 5, 2022</span></div>
                        <div className='title'>We bring Heaven on Earth through Christ</div>
                    </Title>
                </Section>
            </Right>
            </ContentWrap>
        </Wrapper>
    </Container>
  )
}

export default Articles

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
justify-content: center;
align-items: center;
// background: red;
padding: 20px 0;
`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
// background: pink;
// font-family: poppins;
`
const Top = style.div`
width: 100%;
// height: 30%;
padding: 20px 0;
// background: blue;
display: flex;
flex-direction: column;
justify-content: center;
span {
    font-weight: bold;
};
div{
    font-weight: bold;
    font-size: 50px;
}
`
const Right = style.div`
width: 60%;
height: 100%;
// background: green;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 15px 0;
@media screen and (max-width:932px){
    width: 100%;
}
`
const Left = style.div`
width: 40%;
height: 100%;
// background: yellow;
display: flex;
flex-direction: column;
// align-items: center;
justify-content: center;

div.content {
    
    
    div.textWrap {
        width: 70%;
        // background: lavender;
    }
};
@media screen and (max-width:932px){
    width: 100%;
}
`
const ContentWrap = style.div`
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content: space-around;
@media screen and (max-width:932px){
    flex-direction: column;
}
`
const Image = style.div`
width: 100%;
height: 400px;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // background: grey;
    :hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all ease 950ms;
    };
};
`
const Content = style.div`
width: 100%;
height: 60%;
display: flex;
justify-content: space-between;
padding-top: 30px; 
`
const Date = style.div`
width: 15%;
height: 80px;
// background: blue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all ease 950ms;
};
div {
    font-size: 50px;
    font-weight: bold;
};
span {
    font-weight: bold;
    margin-top: -10px;
}
`
const TextWrap = style.div`
width: 80%;
// background: lavender;
:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all ease 950ms;
};
div {
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    // background: blue;
    @media screen and (max-width: 1148px){
        font-size: 25px;
    };
    @media screen and (max-width: 958px){
        font-size: 22px;
        line-height: 25px;
    };
};

`
const Section = style.div`
width: 90%;
// height: 160px;
// background: red;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-around;
@media screen and (max-width: 1064px){
    justify-content: space-between;
};
@media screen and (max-width:932px){
    justify-content: space-evenly;
};
@media screen and (max-width:866px){
    flex-direction: column;
};
`
const Picture = style.div`
width: 30%;
height: 100%;
:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all ease 950ms;
};
// background: lavender;
@media screen and (max-width:866px){
    width: 100%;
};

img {
    width: 180px;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width:930px){
        width: 230px;
    };
    @media screen and (max-width:866px){
        width: 100%;
    };
}
`
const Title = style.div`
width: 60%;
height: 100%;
// background: blue;
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all ease 950ms;
};
@media screen and (max-width:866px){
        width: 100%;
        height: 100px;
    };
div.heading {
    font-weight: bold;
    margin-bottom: 10px;
    span {
        margin-left: 5px;
        font-weight: 400;
        font-size: 15px;
    };
};
div.title {
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    // background: blue;
    @madia screen and (max-width:){
        // font-size: 20px;
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