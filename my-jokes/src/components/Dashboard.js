import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import './css/Dashboard.css';

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import { imageData } from './../data/imageData.js'; 
// first cube
import dadgif1 from './../assets/dad-gif1.gif';
import dadgif2 from './../assets/dad-gif2.gif';
import dadgif3 from './../assets/dad-gif3.gif';
import dadgif4 from './../assets/dad-gif4.gif';
// second cube
import dadgif5 from './../assets/dad-gif5.gif';
import dadgif6 from './../assets/dad-gif6.gif';
import dadgif7 from './../assets/dad-gif7.gif';
import dadgif8 from './../assets/dad-gif8.gif';
// third cube
import dadgif9 from './../assets/dad-gif9.gif';
import dadgif10 from './../assets/dad-gif10.gif';
import dadgif11 from './../assets/dad-gif11.gif';
import dadgif12 from './../assets/dad-gif12.gif';



const Dashboard = ({dadImages}) => {
    const history = useHistory();
    const [mySwiper, setMySwiper] = useState(null);
    // const [current, setCurrent] = useState(0);
    // const length = dadImages.length;
    // const timeout = useRef(null);

    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
            effect: 'cube',
            grabCursor: true,
            centeredSlides: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        setMySwiper(mySwiper) 
    }, [])


    return (
        <div className="dashboard-main-div">

            {/* <div className="dashboard-header-div">
                <h1 className="dash-header">
                    Your Dashboard
                </h1>
            </div> */}

            <div className="dashboard-deck-div">
                <button className="navigate-btn" onClick={() => history.push(`/dashboard/random-jokes`)}>Want to know a Random Dad Joke?</button>
            </div>

            <div className="cube-main-div"> 
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        {/* {imageData.map((dadImg, index) => {
                            return (
                                <div key={index}> 
                                    {index === current && (
                                        <div class="swiper-slide"> <img src={dadImg.image}/> </div>
                                    )}
                                
                                </div>
                            )
                        })} */}

                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif3}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif2}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif1}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif4}/> </div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                </div>


                {/* two */}

                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif6}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif8}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif7}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif5}/> </div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                    <button className="navigate-btn style-solo-btn btn-two" onClick={() => history.push(`/dashboard/trending-gifs`)}> Trending Gifs :) </button>
                </div>


                {/* three */}

                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif11}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif9}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif10}/> </div>
                        <div class="swiper-slide"> <img className="style-dad-gif" src={dadgif12}/> </div>
                    </div>
                    
                    <div class="swiper-pagination"></div>
                </div>

            </div>


            
        </div>
    )
}

export default Dashboard
