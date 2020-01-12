import React, { CSSProperties, useContext } from 'react';
import ContentContext from '../../context';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Image from '../utils/image';
import { IContentElement } from '../interfaces/interfaces';

interface ParagraphProps {
    paragraph: IContentElement;
}

function Paragraph({ paragraph }: ParagraphProps) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                width: '40%',
                justifyContent: 'center',
                flexDirection: 'column',
                [theme.breakpoints.down('xs')]: {
                    width: '100% !important',
                    marginBottom: '4px'
                }
            },
            image: {
                width: '55%',
                [theme.breakpoints.down('xs')]: {
                    width: '100% !important',
                    marginBottom: '4px'
                }
            },
            texts: {
                textAlign: 'left',
                fontSize: '19px',
                margin: '4px'
            },
            textsTitle: {
                textAlign: 'left',
                fontSize: '25px'
            }
        })
    );
    const classes = useStyles();

    return (
        <>
            <div className={classes.image}>
                {paragraph.images.map((image: any, index: number) => {
                    return <Image key={index} srcName={image} />;
                })}
            </div>
            <div className={classes.root}>
                <p className={classes.textsTitle}>
                    <b>LUCIANO TORRES S.L.</b>
                </p>
                {paragraph.texts.map((text: any, index: number) => {
                    return (
                        <p className={classes.texts} key={index}>
                            {text}
                        </p>
                    );
                })}
            </div>
        </>
    );
}

export default function Contact() {
    const { contacto: content } = useContext(ContentContext);
    const customStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    };
    const customStyleRow: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'space-between'
    };

    return (
        <div style={customStyleRow}>
            {content.map((paragraph: IContentElement, index: number) => {
                return (
                    <div key={index} style={customStyle}>
                        <Paragraph paragraph={paragraph}></Paragraph>
                    </div>
                );
            })}
        </div>
    );
}
