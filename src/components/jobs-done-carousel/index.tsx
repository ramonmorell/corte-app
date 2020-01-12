import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../utils/image';
import { ICarouselProps } from '../interfaces/interfaces';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export default function Carousel({ content }: ICarouselProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                // height: '100%', // TODO Modificar cuando tengamos claro el tamaño de las imagenes
                // [theme.breakpoints.down('xs')]: {
                //     height: '100%'
                // }
            }
        })
    );

    const classes = useStyles();

    return (
        <Slider {...settings}>
            {content.images.map((image: string, index: number) => (
                <div key={index} className={classes.root}>
                    <Image srcName={image} />
                </div>
            ))}
        </Slider>
    );
}
