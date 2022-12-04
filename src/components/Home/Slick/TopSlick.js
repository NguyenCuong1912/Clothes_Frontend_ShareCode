import React from 'react'
import { _fixtop1, _fixtop2 } from './../../../utils/util/ImagePath';
import Slider from 'react-slick';

export default function TopSlick() {
    const settings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false
    };
    return (
        <div className='static'>
            <Slider {...settings}>
                <div>
                    <img src={_fixtop1} alt='banner1' />
                </div>
                <div>
                    <img src={_fixtop2} alt='banner2' />
                </div>
            </Slider>
        </div>
    )
}
