import React, { useCallback, useMemo, useState, useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Carousel from '../carousel';
import { IContentElement, IButonsJobsDone } from '../interfaces/interfaces';
import ContentContext from '../../context';

export default function JobsDone() {
    const { trabajos } = useContext(ContentContext);
    const butons = useMemo(
        () => [
            {
                url: './assets/images/servicio1.jpg',
                title: 'LETRAS Y ACABADOS',
                width: '24%'
            },
            {
                url: './assets/images/rotulos.jpg',
                title: 'ROTULACIÓN',
                width: '24%'
            },
            {
                url: './assets/images/decoracion.jpg',
                title: 'DECORACIÓN EVENTOS',
                width: '24%'
            },
            {
                url: './assets/images/servicio1.jpg',
                title: 'OTROS',
                width: '24%'
            }
        ],
        []
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
            image: {
                position: 'relative',
                height: 40,
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
            }
        })
    );

    const classes = useStyles();

    const [contentToCarousel, setContentToCarousel] = useState<IContentElement>(
        trabajos[0]
    );

    const handleOnClickButton = useCallback(
        (n: number) => {
            setContentToCarousel(trabajos[n]);
        },
        [trabajos]
    );

    return (
        <div>
            <div className={classes.root}>
                {butons.map((buton: IButonsJobsDone, index: number) => (
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
            <Carousel content={contentToCarousel}></Carousel>
        </div>
    );
}
