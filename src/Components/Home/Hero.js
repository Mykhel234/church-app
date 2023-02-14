import React, {useEffect} from 'react'
import style from 'styled-components'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Hero = () => {


    useEffect(() => {
        Aos.init();
      }, []);


    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5500,
        infinite: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        // fade: true,
        
        // centerMode: true,
        adaptiveHeight: true,
      };
  
  return (
    <Container>
        {/* <Heading>Heads of Organizations</Heading> */}
        <Wrapper>
            <Carousel style={{width: "100%"}} {...settings}>
                <div>
                <Portfolio>
                    <Image>
                        <img src={"images/M2.jpg"}/>
                    </Image>
                    <div className='description'>
                        <span>Mrs. Edith Gabriel</span>
                        <div className='title'>PFC Chairperson</div>
                        <section>
                            <Socials>
                                <BsFacebook/>
                                <AiOutlineTwitter/>
                                <AiFillGooglePlusCircle/>
                                <BsInstagram/>
                            </Socials>
                        </section>
                    </div>
                </Portfolio>
                </div>
                <div>
                <Portfolio>
                    <Image>
                        <img src={"images/M2.jpg"}/>
                    </Image>
                    <div className='description'>
                        <span>Mrs. Edith Gabriel</span>
                        <div className='title'>PFC Chairperson</div>
                        <section>
                            <Socials>
                                <BsFacebook/>
                                <AiOutlineTwitter/>
                                <AiFillGooglePlusCircle/>
                                <BsInstagram/>
                            </Socials>
                        </section>
                    </div>
                </Portfolio>
                </div>
                <div>
                <Portfolio>
                    <Image>
                        <img src={"images/M2.jpg"}/>
                    </Image>
                    <div className='description'>
                        <span>Mrs. Edith Gabriel</span>
                        <div className='title'>PFC Chairperson</div>
                        <section>
                            <Socials>
                                <BsFacebook/>
                                <AiOutlineTwitter/>
                                <AiFillGooglePlusCircle/>
                                <BsInstagram/>
                            </Socials>
                        </section>
                    </div>
                </Portfolio>
                </div>
                <div>
                <Portfolio>
                    <Image>
                        <img src={"images/M2.jpg"}/>
                    </Image>
                    <div className='description'>
                        <span>Mrs. Edith Gabriel</span>
                        <div className='title'>PFC Chairperson</div>
                        <section>
                            <Socials>
                                <BsFacebook/>
                                <AiOutlineTwitter/>
                                <AiFillGooglePlusCircle/>
                                <BsInstagram/>
                            </Socials>
                        </section>
                    </div>
                </Portfolio>
                </div>
                <div>
                <Portfolio>
                    <Image>
                        <img src={"images/M2.jpg"}/>
                    </Image>
                    <div className='description'>
                        <span>Mrs. Edith Gabriel</span>
                        <div className='title'>PFC Chairperson</div>
                        <section>
                            <Socials>
                                <BsFacebook/>
                                <AiOutlineTwitter/>
                                <AiFillGooglePlusCircle/>
                                <BsInstagram/>
                            </Socials>
                        </section>
                    </div>
                </Portfolio>
                </div>
                <div>
                <Portfolio>
                    <Image>
                        <img src={"images/M2.jpg"}/>
                    </Image>
                    <div className='description'>
                        <span>Mrs. Edith Gabriel</span>
                        <div className='title'>PFC Chairperson</div>
                        <section>
                            <Socials>
                                <BsFacebook/>
                                <AiOutlineTwitter/>
                                <AiFillGooglePlusCircle/>
                                <BsInstagram/>
                            </Socials>
                        </section>
                    </div>
                </Portfolio>
                </div>
                {/* <div>
                    <Background>
                       <img src={"images/BG3.jpg"}/>
                    </Background>
                </div>
                <div>
                    <Background>
                    <img src={"images/M2.jpg"}/>
                    </Background>
                </div>
                <div>
                    <Background>
                        <img src={"images/M3.jpg"}/>
                    </Background>
                </div>
                <div>
                    <Background>
                        <img src={"images/M1.jpg"}/>
                    </Background>
                </div>
                <div>
                    <Background>
                        <img src={"images/F3.jpg"}/>
                    </Background>
                </div> */}
            </Carousel>
            <Text>
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
                        {/* <button
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="3000"
                        data-aos-delay="1000"
                        >More Details</button> */}
                        </div>
            </Text>
        </Wrapper>
    </Container>
  )
}

export default Hero

const Container = style.div`
width: 100%;
// color: white;
// height: 100vh;

// background: url("images/BG1.jpg");
// background-position: center;
background: #E8EAF6;
`
const Wrapper = style.div`
width: 100%;
height: 100%; 
display: flex;
flex-direction: column;
position: relative;
`
const Carousel = style(Slider)`
width: 100%;
height: 100%;
overflow: hidden;
// padding-top: 200px;
// background: url("images/BG1.jpg");
display: flex;
align-items: center; 
justify-content: space-around;
`
const Background = style.div`
padding-top: 100px;
width: 100%;
height: 100vh;
// background: url("images/BG1.jpg");
display: flex;
justify-content: center;
align-items: center;
font-family: 'Alice', serif;
position: relative;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
};
`
const Text = style.div`
width: 30%;
Height: 20%;
top: 80%;
left: 0%;
backdrop-filter: blur(150px);
// background: red;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Alice', serif;
position: absolute;

div.container {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    color: white;
    // background: green;
};
span{
    
};
h1 {
    margin: 0;
};
`
const Portfolio = style.div`
padding: 100px 0;
width: 280px;
height: 95%;
// background: blue;
// border-bottom: 5px solid grey;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 35px;
div.description {
    width: 100%;
    height: 20%;
    // background: blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    span {
        font-weight: bold;
        font-size: 20px;
    };
    div.title {
        font-weight: 600;
        font-style: italic;
    }; 
    section {
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
    };
};
:hover {
    cursor: pointer;
    div.description {
        section {
            display: block
            width: 100%;
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all ease 950ms;
            };
    };
};
@media screen and (max-width: 840px) {
    width: 100%;
    padding: 60px 0;
};
`
const Image = style.div`
width: 100%;
height: 78%;
// background: red;
object-fit: contain;
border-radius: 5px;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
};
`
const Socials = style.div`
width: 80%;
height: 100%;
// background: white;
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px 0;
margin-top: 5px
// background: lavender;
// display: none;
`
// const Heading = style.h1`
// padding-top: 120px;
// // margin-bottom: 30px;
// width: 100%;
// height: 20%;
// display: flex;
// justify-content: center;
// align-items: center;
// // background: blue;
// // padding: 30px 0;
// // padding: 0;
// margin: 0;
// @media screen and (max-width: 392px) {
//     font-size: 28px;
// };
// @media screen and (max-width: 352px) {
//     font-size: 24px;
// };

// `
// const Wrapper = style.div``
// const Wrapper = style.div``
// const Wrapper = style.div``
// const Wrapper = style.div``
// const Wrapper = style.div``