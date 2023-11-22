import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out Some EPIC Designs!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                     src='images/img-8.jpg'
                     text='Explore and get great Designs with Viccinini Marketing'
                     label='View Designs'
                     path='/about'
                     />
                    <CardItem
                     src='images/img-7.jpg'
                     text='Explore and get great Designs with Viccinini Marketing'
                     label='View Designs'
                     path='/about'
                     />
                     <CardItem
                     src='images/img-6.jpg'
                     text='Explore and get great Designs with Viccinini Marketing'
                     label='View Designs'
                     path='/about'
                     />
                      <CardItem
                     src='images/img-4.jpg'
                     text='Explore and get great Designs with Viccinini Marketing'
                     label='View Designs'
                     path='/about'
                     />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                     src='images/img-5.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View Designs'
                     path='/about'
                     />
                    <CardItem
                     src='images/img-3.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View Designs'
                     path='/about'
                     />
                    <CardItem
                     src='images/img-2.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View Designs'
                     path='/about'
                     />
                    <CardItem
                     src='images/img-1.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View Designs'
                     path='/about'
                     />
                    <CardItem
                     src='images/img-10.jpg'
                     text='Your Designs Satisfaction is Guarantee'
                     label='View Designs'
                     path='/about'
                     />
                     
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards