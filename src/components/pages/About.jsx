import React from 'react'
import aboutImg from '../../aboutImg/b2.jpg'
import '../../components/AboutSection.css'
import { Container,  Row,Col } from 'reactstrap'
import CardItem from '../CardItem'
// import '../../App.css'

export default function About() {
    return (
    <section className='about__section'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                       <h1 className="section__subtitle">About Us</h1>
                       <h1 className="section__subtitle">Welcome To The Official Website Of Viccinini  Media & Marketings Group</h1>


                    <div className="about__section-content">
                        <div className="about__img">
                         <img src={aboutImg}alt="" className='w-100' />
                       </div>
                        <div className="section__description">
                           <div className='content'>
                               <p>
                                  We are glad that you are here. A brief resume of our company by: Viccinini International Financials & Holdings Group, we are also an Afilates or part of the Viccinini Group, & Viccnini  Financials, As a Media Marketing Company. We have been in business since <i>2019</i>, we have decided to lauch our business idea because there are so many Entrepreneurs out there that has the  best ideas to start a business, but are missing the right tools to promote their business , like Designing the best logos, the design welcome kit, promote their social media, this is where we came in to bring the peace of mind to our clients, entrepreneurs or potentials prospects, At Viccinini Media & Marketings Group we are obsess of bringing the solutions & the peace of mind to our entrepreneurs whom strives out there to be the best of what they do. That's why our Motto is : Your Satisfaction is Guarantee.Once again thanks for being here  and thank you for what you do, we will see you at the top.
                              </p>
                           </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='cards'>
        <h1>Sign Up To Get EPIC Designs!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                     src='images/img-8.jpg'
                     text='Explore and get great Designs with Viccinini Marketing'
                     label='View designs'
                     path='/sign-up'
                     />
                    <CardItem
                     src='images/img-7.jpg'
                     text='Explore and get great Designs with Viccinini Marketing'
                     label='View designs'
                     path='/sign-up'
                     />
                     <CardItem
                     src='images/img-6.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View options'
                     path='/sign-up'
                     />
                     <CardItem
                     src='images/img-3.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View options'
                     path='/sign-up'
                     />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                     src='images/img-1.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View options'
                     path='/sign-up'
                     />
                    <CardItem
                     src='images/img-10.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View options'
                     path='/sign-up'
                     />
                       <CardItem
                     src='images/img-4.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View options'
                     path='/sign-up'
                     />
                      <CardItem
                     src='images/img-2.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View options'
                     path='/sign-up'
                     />
                </ul>
            </div>
        </div>
    </div>
        </Container>
    </section>
    )
}