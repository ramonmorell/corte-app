import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../utils/image';
import { CarouselProps } from '../interfaces/interfaces';

export default function Carousel({ content }: CarouselProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {content.images.map((image: string, index: number) => (
                <div key={index}>
                    <Image srcName={image} />
                </div>
            ))}
        </Slider>
    );
}
