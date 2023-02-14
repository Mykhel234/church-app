import React from 'react'
import style from 'styled-components'

const PastEvents = () => {
  return (
    <Container>
        <Wrapper>
            <Heading>Program Of Events<div></div></Heading>
            <Content>
                <div className='month'>February 2023<span></span></div>
                <section>
                    <Date>FRI<div>10</div></Date>   
                    <div className='wrap'>
                        <div>Feb 10, 2023 @ 10:30am - Feb 12, 2024 @ 5:00pm</div>
                        <h3>Bible study</h3>
                        <span>Our Church 350 5th Ave, New York, NY</span>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                    </div>
                </section>
                <section>
                    <Date>SUN<div>18</div></Date>   
                    <div className='wrap'>
                        <div>Feb 10, 2023 @ 10:30am - Feb 12, 2024 @ 5:00pm</div>
                        <h3>Laity Week</h3>
                        <span>Our Church 350 5th Ave, New York, NY</span>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                    </div>
                </section>
                <section>
                    <Date>SAT<div>29</div></Date>   
                    <div className='wrap'>
                        <div>Feb 10, 2023 @ 10:30am - Feb 12, 2024 @ 5:00pm</div>
                        <h3>Advent Retreat</h3>
                        <span>Our Church 350 5th Ave, New York, NY</span>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                    </div>
                </section>
            </Content>
            <Content>
                <div className='month'>March 2023<span></span></div>
                <section>
                    <Date>FRI<div>10</div></Date>   
                    <div className='wrap'>
                        <div>Feb 10, 2023 @ 10:30am - Feb 12, 2024 @ 5:00pm</div>
                        <h3>Bible study</h3>
                        <span>Our Church 350 5th Ave, New York, NY</span>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                    </div>
                </section>
                <section>
                    <Date>SUN<div>18</div></Date>   
                    <div className='wrap'>
                        <div>Feb 10, 2023 @ 10:30am - Feb 12, 2024 @ 5:00pm</div>
                        <h3>Laity Week</h3>
                        <span>Our Church 350 5th Ave, New York, NY</span>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                    </div>
                </section>
                <section>
                    <Date>SAT<div>29</div></Date>   
                    <div className='wrap'>
                        <div>Feb 10, 2023 @ 10:30am - Feb 12, 2024 @ 5:00pm</div>
                        <h3>Advent Retreat</h3>
                        <span>Our Church 350 5th Ave, New York, NY</span>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                    </div>
                </section>
            </Content>
            
        </Wrapper>
    </Container>
  )
}

export default PastEvents

const Container = style.div`
width: 100%;
// height: 100vh;
background: #2E497F;
// background: rgb(14, 166, 209);
color: #E8EAF6;
display: flex;
justify-content: center;
align-items: center;
padding-top: 100px;

`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center
align-items: center;
// background: cyan;
padding: 20px 0;
margin-bottom: 80px;
`
const Heading = style.h1`
width: 100%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
// background: blue;
padding: 20px 0;
margin: 0;
`
const Content = style.div`
width: 100%;
height: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background: red;
div.month {
    
    width: 100%;
    height: 10%;
    // background: rgb(190, 190, 214);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    span {
        width: 85%;
        height: 2px;
        background: lightgrey;
    };

};
section{
    width: 100%;
    height: 100%;
    display: flex;
    margin: 10px 0;
    // background: grey;
    
    div.wrap {
        width: 90%;
        height: 100%;
        // background: yellow;
        display: flex;
        flex-direction: column;
        
        h3 {
            margin: 0;
            padding: 10px 0;
        };
    };
};
`
const Date = style.div`
width: 10%;
// height: 100%;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
// background: green;
font-weight: bold;
line-height: 22px;

div {
    font-size: 25px;
    font-weight: bold;
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