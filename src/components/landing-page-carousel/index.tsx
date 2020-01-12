import React, { useState, useEffect } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { ILandingPageCarousel } from '../interfaces/interfaces';
import LandingPageImageCarousel from '../landing-page-image-carousel';

export default function LandingPageCarousel({ content }: ILandingPageCarousel) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            '@keyframes citationAnimation': {
                '0%': {
                    opacity: 0
                },
                '04%': {
                    opacity: 0
                },
                '20%': {
                    opacity: 0.8
                },
                '90%': {
                    opacity: 0.8
                },
                '98%': {
                    opacity: 0
                },
                '100%': {
                    opacity: 0
                }
            },
            root: {
                textAlign: 'center',
                fontSize: '30px',
                color: 'white',
                opacity: 0.8,
                position: 'relative',
                width: '100%',
                height: '600px',
                animationName: '$citationAnimation',
                animationDuration: '10s',
                animationTimingFunction: 'ease',
                borderRadius: '5px',
                [theme.breakpoints.down('xs')]: {
                    fontSize: '15px',
                    width: '400px'
                }
            }
        })
    );
    const classes = useStyles();

    const [imageShow, setImageShow] = useState(true);

    // useEffect(() => {
    //     if (!imageShow) {
    //         const timeout = setTimeout(() => {
    //             setImageShow(true);
    //         }, 0);
    //         return () => clearTimeout(timeout);
    //     }
    // }, [imageShow]);

    const [imageCounter, setImageCounter] = useState(0);

    useEffect(() => {
        if (imageShow) {
            const interval = setInterval(() => {
                if (imageCounter < content.images.length - 1) {
                    setImageCounter(imageCounter + 1);
                } else {
                    setImageCounter(0);
                }
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [imageCounter, content.images.length, imageShow]);

    return (
        <div className={classes.root}>
            {imageShow && (
                <LandingPageImageCarousel
                    srcName={content.images[imageCounter]}
                    title={content.texts[imageCounter]}
                ></LandingPageImageCarousel>
            )}
        </div>
    );
}
