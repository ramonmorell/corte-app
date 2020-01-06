import React from 'react';

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export default function Main() {
    const bg = './assets/images/LandingPageBackgroundImage.png';
    const letersImage = './assets/images/LandingPageBackgroundImage.png';
    const rotulsImage = './assets/images/rotulos.jpg';
    const decorationsImage = './assets/images/decoracion.jpg';
    const otherImage = './assets/images/LandingPageBackgroundImage.png';
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
                color: 'white',
                backgroundColor: 'black',
                opacity: 0.8,
                position: 'relative',
                width: '70%',
                animationName: '$citationAnimation',
                animationDuration: '3s',
                animationTimingFunction: 'ease',
                padding: '15px',
                borderRadius: '5px'
            },
            '@keyframes worksAnimation': {
                '0%': {
                    top: '100px',
                    opacity: 0
                },
                '40%': {
                    top: '100px',
                    opacity: 0
                },
                '100%': {
                    top: '0px',
                    opacity: 0.8
                }
            },
            works: {
                textAlign: 'center',
                color: 'white',
                opacity: 0.9,
                position: 'relative',
                top: '0px',
                width: '260px',
                height: '130px',
                [theme.breakpoints.down('xs')]: {
                    width: '160px',
                    height: '80px'
                }
            },
            leters: {
                animationName: '$worksAnimation',
                animationDuration: '4s',
                animationTimingFunction: 'ease',
                padding: '15px',
                borderRadius: '5px',
                backgroundImage: `url(${letersImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            rotuls: {
                animationName: '$worksAnimation',
                animationDuration: '5s',
                animationTimingFunction: 'ease',
                padding: '15px',
                borderRadius: '5px',
                backgroundImage: `url(${rotulsImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            decorations: {
                animationName: '$worksAnimation',
                animationDuration: '6s',
                animationTimingFunction: 'ease',
                padding: '15px',
                borderRadius: '5px',
                backgroundImage: `url(${decorationsImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            others: {
                animationName: '$worksAnimation',
                animationDuration: '6s',
                animationTimingFunction: 'ease',
                padding: '15px',
                borderRadius: '5px',
                backgroundImage: `url(${otherImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
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
            <div className={classes.row}>
                <div className={classes.citation}>
                    <h1>
                        <b>
                            SOMOS LO QUE HACEMOS DÍA A DÍA, DE MODO QUE LA
                            EXCELENCIA NO ES UN ACTO SINO UN HÁBITO
                        </b>
                    </h1>
                    <h3>
                        <i> Aristoteles </i>
                    </h3>
                </div>
            </div>
            <div className={classes.row}>
                <div className={`${classes.works} ${classes.leters}`}>
                    <div className={classes.worksTitle}>LETRAS Y ACABADOS</div>
                </div>
                <div className={`${classes.works} ${classes.rotuls}`}>
                    <div className={classes.worksTitle}> ROTULACIÓN </div>
                </div>
                <div className={`${classes.works} ${classes.decorations}`}>
                    <div className={classes.worksTitle}>DECORACIÓN EVENTOS</div>
                </div>
                <div className={`${classes.works} ${classes.others}`}>
                    <div className={classes.worksTitle}>OTROS TRABAJOS</div>
                </div>
            </div>
        </div>
    );
}
