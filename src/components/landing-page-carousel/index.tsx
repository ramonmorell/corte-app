import React, { useState, useEffect } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { ILandingPageCarousel, IImageCarousel } from '../interfaces/interfaces';

export default function LandingPageCarousel({
    images,
    titles
}: ILandingPageCarousel) {
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
                width: '70%',
                height: '300px',
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

    const [imageShow, setImageShow] = useState(false);

    useEffect(() => {
        if (!imageShow) {
            const timeout = setTimeout(() => {
                setImageShow(true);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [imageShow]);

    const [imageCounter, setImageCounter] = useState(0);

    useEffect(() => {
        if (imageShow) {
            const interval = setInterval(() => {
                if (imageCounter < images.length - 1) {
                    setImageCounter(imageCounter + 1);
                } else {
                    setImageCounter(0);
                }
            }, 10000);
            return () => clearInterval(interval);
        }
    }, [imageCounter, images.length, imageShow]);

    return (
        <div className={classes.root}>
            {imageShow && (
                <ImageCarousel
                    srcName={images[imageCounter]}
                    title={titles[imageCounter]}
                ></ImageCarousel>
            )}
        </div>
    );
}

function ImageCarousel({ srcName, title }: IImageCarousel) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                backgroundImage: `url(./assets/images/${srcName}.jpg)`,
                display: 'block',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                paddingTop: '20px'
            },
            worksTitle: {
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
                width: '80%',
                opacity: 0.8
            }
        })
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.worksTitle}>{title}</div>
        </div>
    );
}
