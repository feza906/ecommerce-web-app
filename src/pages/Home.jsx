import React from 'react'
import laptop from '../assets/1.png'
import phone from '../assets/2.png'
import Slider from 'react-slick'
import { ImageSliders } from '../components/ImageSliders'
import { TopProducts } from '../components/TopProducts'



export const Home = () => {
  const slides = [{src:laptop},{src:phone}];
  const containerStyles = {
    width: '100%',
    height:'280px'
  }
  return (
    <div>
      <div style={containerStyles} >
      <ImageSliders slides={slides}/>
      </div>
      <div className='text-center mt-12 uppercase text-xl font-semibold'>Top Deals</div>
      <TopProducts/>
    </div>
  )
}
