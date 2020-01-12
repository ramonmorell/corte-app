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
                    opacity: 1
                },
                '90%': {
                    opacity: 1
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
                opacity: 1,
                position: 'relative',
                width: '100%',
                height: '600px',
                animationName: '$citationAnimation',
                animationDuration: '8s',
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

    const [imageCounter, setImageCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (imageCounter < content.images.length - 1) {
                setImageCounter(imageCounter + 1);
            } else {
                setImageCounter(0);
            }
        }, 8000);
        return () => clearInterval(interval);
    }, [imageCounter, content.images.length]);

    return (
        <div className={classes.root}>
            <LandingPageImageCarousel
                srcName={content.images[imageCounter]}
                title={content.texts[imageCounter]}
            ></LandingPageImageCarousel>
        </div>
    );
}
