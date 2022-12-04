import React, { useRef } from 'react'
import Slider from 'react-slick';
import OneProduct from '../Product/OneProduct';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';




export default function ProductSlick(props) {


    const renderProduct = () => {
        return props.lstProduct.map((item, index) => {
            return <OneProduct key={index} clothes={item} />
        })
    }

    const ref = useRef({});

    const next = () => {
        ref.current.slickNext();
    };

    const previous = () => {
        ref.current.slickPrev();
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className='grid grid-cols-12 my-8'>
            <div className='grid content-center ml-20'>
                <button className="button h-8 w-8" onClick={previous}>
                    <AiFillLeftCircle className='text-3xl text-red-500 hover:text-red-700' />
                </button>
            </div>
            <div className='col-span-10'>
                <Slider {...settings}>
                    {renderProduct()}
                </Slider>
            </div>
            <div className='grid content-center ml-1'>
                <button className="button h-8 w-8" onClick={next}>
                    <AiFillRightCircle className='text-3xl text-red-500 hover:text-red-700' />
                </button>
            </div>
        </div>
    )
}
