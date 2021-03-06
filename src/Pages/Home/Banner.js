import React from 'react';
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
const Banner = () => {
    return (
        <div class="carousel w-full min-h-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={slider1} class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle btn-sm  bg-primary">❮</a>
                    <a href="#slide2" class="btn btn-circle btn-sm  bg-primary">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src={slider2} class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle btn-sm  bg-primary">❮</a>
                    <a href="#slide3" class="btn btn-circle btn-sm  bg-primary">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;