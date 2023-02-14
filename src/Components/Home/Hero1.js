import React, {useEffect} from 'react'
import style from 'styled-components'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero1 = () => {


    useEffect(() => {
        Aos.init();
      }, []);


    
  
  return (
    
        <Container>
            
            <Wrapper>
                        <div className='container'
                        
                        >
                        <span
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="3000"
                        data-aos-delay="2000"
                        
                        >OUR MISSION IS TO BRING TO THE LIGHT</span>
                        <h1
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="3000"
                        >Open Your Heart <br/> to Faith and Hope</h1>
                        <button
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="3000"
                        data-aos-delay="1000"
                        >More Details</button>
                        </div>
                    </Wrapper>
           
        </Container>
    
  )
}

export default Hero1


const Container = style.div`
width: 100%;
height: 100vh;
background: url("images/mary.jpg");
// background: red;
background-position: top;
// background-repeat: no-repeat;
`
const Wrapper = style.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Alice', serif;

div.container {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    color: #FEFEE3;
    // background: green;
    margin-top: 40px;
};
span{
    font-size: 20px;
    margin-bottom: 10px;
    @media screen and (max-width: 642px){
        font-size: 15px;
        margin-bottom: 5px;
    };
    @media screen and (max-width: 464px){
        font-size: 12px;
        // line-height: 40px;
    };
};
h1 {
    margin: 0;
    font-size: 70px;
    line-height: 75px;
    // color: rgb(232, 232, 211);
    color: color;
    filter: drop-shadow(8px 4px 4px black);
    @media screen and (max-width: 642px){
        font-size: 50px;
        line-height: 55px;
    };
    @media screen and (max-width: 464px){
        font-size: 35px;
        line-height: 40px;
    }
};
button{
    margin-top: 40px;
    padding: 23px 60px;
    border-radius: 2px;
    border: 0;
    // background: #BF994D;
    background: #E39D1B;
    // background: rgb(226, 152, 13);
    transition: all 950ms;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
    }
}
`


// const Wrapper = style.div``
// const Wrapper = style.div``
// const Wrapper = style.div``
// const Wrapper = style.div``
// const Wrapper = style.div``