import React, {useEffect} from 'react'
import style from 'styled-components'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Hero2 = () => {

    useEffect(() => {
        Aos.init();
      }, []);


  return (
    <Container>
        <Wrapper>
            <div className='Title'
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            data-aos-delay="2000"
            >CHURCH OF THE<br/> ASSUMPTION</div>
            <span 
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            >Igbo Elerin Road, Iba, Ojo Road LGA</span>
            <span
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            >080133323477, 08090652777</span>
            <span
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            >office@theassumptionparish.org</span>
        </Wrapper>
    </Container>
  )
}

export default Hero2

const Container = style.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Alice', serif;
// background: rgb(68, 138, 196)
background: url("images/mary061.jpg");
background-position: 50% 40%;
// background: rgb(70, 46, 165)
`
const Wrapper = style.div`
width: 85%;
height: 100%;
color: white;
filter: drop-shadow(8px 4px 4px black);
display: flex;
justify-content center;
align-items: center;
flex-direction: column;
// background: silver;
div {
    font-size: 60px;
    text-align: center;
    font-family;
    @media screen and (max-width: 554px){
        font-size: 50px;
        line-height: 50px;
    };
    @media screen and (max-width: 554px){
        font-size: 40px;
        line-height: 40px;
    };
    @media screen and (max-width: 372px){
        font-size: 35px;
        line-height: 35px;
    };
    @media screen and (max-width: 372px){
        font-size: 30px;
        line-height: 30px;
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