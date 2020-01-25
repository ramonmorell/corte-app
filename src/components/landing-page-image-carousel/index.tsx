import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { ILandingPageCarouselImage } from '../interfaces/interfaces';

export default function LandingPageImageCarousel({
    srcName,
    title,
    extraText = ''
}: ILandingPageCarouselImage) {
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
            '@keyframes textAnimation': {
                from: {
                    top: '100px',
                    opacity: 0
                },
                to: {
                    top: '25px',
                    opacity: 0.8
                }
            },
            worksTitleBox: {
                top: '25px',
                opacity: 0.8,
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'black',
                position: 'relative',
                width: '63%',
                animationName: '$textAnimation',
                animationDuration: '4s',
                animationTimingFunction: 'ease',
                borderRadius: '0px 20px 20px 0px',
                [theme.breakpoints.down('xs')]: {
                    width: '75%',
                    fontSize: '20px'
                }
            },
            worksCitationtext: {
                fontSize: '45px',
                [theme.breakpoints.down('xs')]: {
                    fontSize: '20px'
                }
            },
            worksCitationExtra: {
                fontSize: '25px',
                [theme.breakpoints.down('xs')]: {
                    fontSize: '15px'
                }
            },
            worksTitleText: {
                lineHeight: 1.2,
                fontSize: '75px',
                [theme.breakpoints.down('xs')]: {
                    fontSize: '30px'
                }
            }
        })
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.worksTitleBox}>
                <div>
                    {extraText ? (
                        <b className={classes.worksCitationtext}>{title}</b>
                    ) : (
                        <b className={classes.worksTitleText}>{title}</b>
                    )}
                </div>
                {extraText && (
                    <div className={classes.worksCitationExtra}>
                        <i>{extraText}</i>
                    </div>
                )}
            </div>
        </div>
    );
}
