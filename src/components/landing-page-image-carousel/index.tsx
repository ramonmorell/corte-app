import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { ILandingPageCarouselImage } from '../interfaces/interfaces';

export default function LandingPageImageCarousel({
    srcName,
    title
}: ILandingPageCarouselImage) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                backgroundImage: `url(./assets/images/${srcName}.jpg)`,
                display: 'block',
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                paddingTop: '20px',
                [theme.breakpoints.down('xs')]: {
                    fontSize: '40px'
                }
            },
            '@keyframes textAnimation': {
                from: {
                    top: '100px',
                    opacity: 0
                },
                to: {
                    top: '25px',
                    opacity: 1
                }
            },
            worksTitle: {
                top: '25px',
                textAlign: 'center',
                fontSize: '35px',
                color: 'white',
                backgroundColor: 'black',
                opacity: 1,
                position: 'relative',
                width: '70%',
                animationName: '$textAnimation',
                animationDuration: '4s',
                animationTimingFunction: 'ease',
                padding: '15px',
                borderRadius: '0px 20px 20px 0px',
                [theme.breakpoints.down('xs')]: {
                    fontSize: '20px'
                }
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
