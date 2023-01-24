import React from 'react'
import { useState } from 'react'

export const ImageSliders = ({slides}) => {
    const [currentIndex,setCurrentUser] = useState(0);
    const sliderStyles = {
        height : '100%',
        position:'relative',
    }
    const slideStyles = {
        backgroundImage:`url(${slides[currentIndex].src})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
    }   
    const leftArrowStyles = {
        position:'absolute',
        top:'50%',
        transform: 'translate(0,-50%)',
        left: '32px',
        fontSize: '45px',
        zIndex:1,
        cursor:'pointer'
    }
    const rightArrowStyles = {
        position:'absolute',
        top:'50%',
        transform: 'translate(0,-50%)',
        right: '32px',
        fontSize: '45px',
        zIndex:1,
        cursor:'pointer'
    }
    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide? slides.length - 1 : currentIndex - 1;
        setCurrentUser(newIndex);
    }
    const goToNext = () => {
        const isLast = currentIndex === slides.length -1;
        console.log(isLast);
        const newIndex = isLast? 0 : currentIndex + 1;
        setCurrentUser(newIndex);
    }

    return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrev} className="transform ease-in-out duration-300">←</div>
        <div style={rightArrowStyles} onClick={goToNext}>→</div>

        <div style={slideStyles} className="transform ease-in-out duration-500 shadow-lg">

        </div>
    </div>
  )
}
