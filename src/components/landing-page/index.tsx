import React from 'react';

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import LandingPageCarousel from '../landing-page-carousel';

export default function Main() {
    const bg = './assets/images/LandingPageBackgroundImage.png';
    const imagesArray = ['rotulos', 'decoracion'];
    const titlesArray = ['ROTULACIÓN', 'DECORACIÓN EVENTOS'];
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'space-around',
                backgroundImage: `url(${bg})`,
                width: '100%',
                height: '600px',
                [theme.breakpoints.down('xs')]: {
                    paddingTop: '15px'
                }
            },
            row: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap'
            },
            '@keyframes citationAnimation': {
                from: {
                    top: '100px',
                    opacity: 0
                },
                to: {
                    top: '0px',
                    opacity: 0.8
                }
            },
            citation: {
                textAlign: 'center',
                fontSize: '30px',
                color: 'white',
                backgroundColor: 'black',
                opacity: 0.8,
                position: 'relative',
                width: '70%',
                animationName: '$citationAnimation',
                animationDuration: '3s',
                animationTimingFunction: 'ease',
                padding: '15px',
                borderRadius: '5px',
                [theme.breakpoints.down('xs')]: {
                    fontSize: '15px'
                }
            }
        })
    );
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <div className={classes.citation}>
                    <div>
                        <b>
                            SOMOS LO QUE HACEMOS DÍA A DÍA, DE MODO QUE LA
                            EXCELENCIA NO ES UN ACTO SINO UN HÁBITO
                        </b>
                    </div>
                    <div>
                        <i> Aristoteles </i>
                    </div>
                </div>
            </div>
            <div className={classes.row}>
                <LandingPageCarousel
                    images={imagesArray}
                    titles={titlesArray}
                ></LandingPageCarousel>
            </div>
        </div>
    );
}
