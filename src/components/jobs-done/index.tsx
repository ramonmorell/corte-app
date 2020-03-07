import React, { useCallback, useMemo, useState, useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Carousel from '../jobs-done-carousel';
import {
    IContent,
    IContentElement,
    IJobsDoneButons
} from '../interfaces/interfaces';
import ContentContext from '../../context';
import Container from '@material-ui/core/Container';

export default function JobsDone() {
    const { trabajos } = useContext<IContent>(ContentContext);

    const butons = useMemo(
        () =>
            trabajos.map((workElement: IContentElement) => ({
                url: `./assets/images/${workElement.images[0]}.jpg`,
                title: `${workElement.texts[0]}`,
                width: `${100 / trabajos.length - 1}%`
            })),
        [trabajos]
    );

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                minWidth: 275,
                width: '100%',
                justifyContent: 'space-around',
                [theme.breakpoints.down('xs')]: {
                    paddingTop: '15px'
                }
            },
            '@keyframes buttonAnimation': {
                '10%': {
                    opacity: 1
                },
                '12%': {
                    opacity: 0.8
                },
                '14%': {
                    opacity: 1
                },
                '100%': {
                    opacity: 1
                }
            },
            image: {
                position: 'relative',
                height: 40,
                animationName: '$buttonAnimation',
                animationDuration: '9s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                [theme.breakpoints.down('xs')]: {
                    width: '100% !important', // Overrides inline-style
                    height: 40,
                    marginBottom: '4px'
                },
                '&:hover, &$focusVisible': {
                    zIndex: 1,
                    '& $imageBackdrop': {
                        opacity: 0.15
                    },
                    '& $imageMarked': {
                        opacity: 0
                    },
                    '& $imageTitle': {
                        border: '3px solid currentColor'
                    }
                }
            },
            focusVisible: {},
            imageButton: {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.common.white
            },
            imageSrc: {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%'
            },
            imageBackdrop: {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: theme.palette.common.black,
                opacity: 0.4,
                transition: theme.transitions.create('opacity')
            },
            imageTitle: {
                position: 'relative',
                padding: `${theme.spacing(0)}px ${theme.spacing(
                    4
                )}px ${theme.spacing(0)}px`
            },
            imageMarked: {
                height: 3,
                width: 18,
                backgroundColor: theme.palette.common.white,
                position: 'absolute',
                bottom: -2,
                left: 'calc(50% - 9px)',
                transition: theme.transitions.create('opacity')
            },
            carousel_container: {
                width: '70%',
                position: 'relative',
                left: '15%',
                [theme.breakpoints.down('xs')]: {
                    left: '0%',
                    width: '100% !important' // Overrides inline-style
                }
            }
        })
    );

    const classes = useStyles();

    const [contentToCarousel, setContentToCarousel] = useState<IContentElement>(
        () => (trabajos.length ? trabajos[0] : { texts: [], images: [] })
    );

    const handleOnClickButton = useCallback(
        (indexJobs: number) => {
            setContentToCarousel(trabajos[indexJobs]);
        },
        [trabajos]
    );

    return (
        <Container>
            <div className={classes.root}>
                {butons.map((buton: IJobsDoneButons, index: number) => (
                    <ButtonBase
                        onClick={() => {
                            handleOnClickButton(index);
                        }}
                        focusRipple
                        key={buton.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: buton.width
                        }}
                    >
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${buton.url})`
                            }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                            >
                                {buton.title}
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
            <hr></hr>
            {trabajos.length && (
                <div className={classes.carousel_container}>
                    <Carousel content={contentToCarousel}></Carousel>
                </div>
            )}
        </Container>
    );
}
