import React from 'react'
import Slider from 'react-slick'
import OneProduct from '../Product/OneProduct'

export default function OneSlick(props) {
    const renderProduct = () => {
        return props.product.slice(0, 4).map((item, index) => {
            return <OneProduct key={index} clothes={item} />
        })
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

    };
    return (
        <div>
            <Slider {...settings}>
                {renderProduct()}
            </Slider>
        </div>
    )
}
