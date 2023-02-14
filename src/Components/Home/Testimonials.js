import React from 'react'
import style from 'styled-components'

const Testimonials = () => {
  return (
    <Container>
        <Wrapper>
            <EmptySpace></EmptySpace>
            <RightSection>
                <Text>
                    <span>TESTIMONIALS</span>
                    <h1>Parishioners about us</h1>
                    <p>
                    Ignissimos ducimos qui blandiitis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi, sint occaecatii gnissimos ducimus qui blandiitis praesentium.
                    </p>
                </Text>
                <Profile>
                    <Image src={"images/BG3.jpg"}/>
                    <div>
                        <h4>Alexis Moore</h4>
                        <span>London, UK</span>
                    </div>
                </Profile>
            </RightSection>
        </Wrapper>
    </Container>
  )
}

export default Testimonials

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 80px 0;
background: linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url("images/bg4.jpg");
background-position: 30% 20%;
@media screen and (max-width: 724px){
    background-position: 38% 20%;
}
`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`
const EmptySpace = style.div`
width: 40%;
height: 100%;
// background: green;
@media screen and (max-width: 724px){
    display: none;
}
`
const RightSection = style.div`
// padding: 30px 0;
color: white;
width: 50%;
height: 100%;
// background: red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 724px){
    width: 100%;
}
`
const Text = style.div`
width: 100%;
span {
    font-weight: bold;
};
h1 {
    margin: 0;
    margin-top: 5px;
};
`
const Profile = style.div`
width: 100%;
display: flex;
align-items: center;
margin-top: 20px;
h4 {
    margin: 0;
}
`
const Image = style.img`
width: 80px;
height: 80px;
border-radius: 100%;
background: lavender;
margin-right: 20px;
object-fit: cover;
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