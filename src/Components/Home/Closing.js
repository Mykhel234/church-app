import React from 'react'
import style from 'styled-components'

const Closing = () => {
  return (
    <Container>
        <Wrapper>
            <Image src={"images/Church-Logo.png"}/>
            <Text>
                <div>God is with us, God loves us.</div>
                <div>We're sharing His Power.</div>
                <span>...sharing His Power God loves us.</span>
            </Text>
        </Wrapper>
    </Container>
  )
}

export default Closing

const Container = style.div`
width: 100%;
// height: 60vh;
padding: 50px 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(226, 213, 195);
border-top: 10px solid black;
`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Image = style.img`
width: 100px;
height: 100px;
border-radius: 100%;
object-fit: cover;
margin-bottom: 15px;
`
const Text = style.div`
width: 100%;
div {
    font-weight: bold;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 343px){
        font-size: 20px;
    }
};
span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: small;
    font-weight: bold;
    font-style: italic;
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