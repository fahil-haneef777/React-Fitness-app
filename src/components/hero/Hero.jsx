import React from 'react'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart_image from '../../assets/heart.png'
import calories_image from '../../assets/calories.png'
import Header from '../Header/Header'
const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">

                <Header />
                {/* best ad */}
                <div className="best-fitness-ad">
                    <div></div>
                    <span>The best fitness club in town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">

                    <div>
                        <span className='stroke-text'>Shape</span> <span>Your</span>

                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div><span>Here we will help you shape your ideal body and live up your life to fullest!</span></div>

                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+56</span>
                        <span>Expert Coachs</span>
                    </div>
                    <div>
                        <span>+987</span>
                        <span>members joined</span>
                    </div>
                    <div
                    ><span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn more</button>

                </div>



            </div>
            <div className="right-h">
                <div className='live'></div>
                <button className='btn'>Join Now</button>
                <div className="heart-rate">
                    <img alt='' src={Heart_image} />
                    <span>Heart rate</span><span>116 bpm</span>
                </div>
                {/* hero images */}
                <img alt='' src={hero_image} className='hero-image' />
                <img alt='' src={hero_image_back} className='hero-image-back' />

                <div className="calorie">
                    <img alt='' src={calories_image} />
                    <div>
                        <span>Calories Burned</span>
                        <span>220kcal</span>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero