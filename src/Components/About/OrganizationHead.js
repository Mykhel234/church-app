import React from 'react'
import style from 'styled-components'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const OrganizationHead = () => {
  return (
    <Container>
        <Wrapper>
            <Heading>Heads of Organizations</Heading>
            <Contents>
                <Portfolio>
                    <Image>
                        <img src={"images/F1.jpg"}/>
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
                <Portfolio>
                    <Image>
                        <img src={"images/F3.jpg"}/>
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
                <Portfolio>
                    <Image>
                        <img src={"images/M3.jpg"}/>
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
                <Portfolio>
                    <Image>
                        <img src={"images/F4.jpg"}/>
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
                <Portfolio>
                    <Image>
                        <img src={"images/M1.jpg"}/>
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
                <Portfolio>
                    <Image>
                        <img src={"images/HCA.jpg"}/>
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
            </Contents>
        </Wrapper>
    </Container>
  )
}

export default OrganizationHead

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
`
const Wrapper = style.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Heading = style.h1`
width: 100%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
// background: blue;
padding: 30px 0;
padding: 0;
margin: 0;
@media screen and (max-width: 392px) {
    font-size: 28px;
};
@media screen and (max-width: 352px) {
    font-size: 24px;
};

`
const Contents = style.div`
width: 100%;
height: 80%;
display: flex;
justify-content: space-around;
align-items: center;
padding:30px 0;
flex-wrap: wrap;
`
const Portfolio = style.div`
width: 280px;
height: 95%;
// background: blue;
border-bottom: 5px solid grey;
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