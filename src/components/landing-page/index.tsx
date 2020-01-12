import React, { useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import LandingPageCarousel from '../landing-page-carousel';
import ContentContext from '../../context';
import { IContent } from '../interfaces/interfaces';

export default function LandingPage() {
    const { inicio } = useContext<IContent>(ContentContext);

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: '100%',
                height: '600px',
                [theme.breakpoints.down('xs')]: {
                    paddingTop: '50px',
                    height: '500px'
                }
            },
            row: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap'
            }
        })
    );

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                {inicio.length && (
                    <LandingPageCarousel
                        content={inicio[0]}
                    ></LandingPageCarousel>
                )}
            </div>
        </div>
    );
}
