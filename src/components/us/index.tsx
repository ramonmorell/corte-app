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
                width: '48%',
                [theme.breakpoints.down('xs')]: {
                    width: '100% !important',
                    marginBottom: '4px'
                }
            }
        })
    );

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                {paragraph.texts.map((text: any, index: number) => {
                    return <p key={index}>{text}</p>;
                })}
            </div>
            <div className={classes.root}>
                {paragraph.images.map((image: any, index: number) => {
                    return <Image key={index} srcName={image} />;
                })}
            </div>
        </>
    );
}

export default function Us() {
    const content = useContext(ContentContext);
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
            {content.nosotros.map(
                (paragraph: IContentElement, index: number) => {
                    return (
                        <div key={index} style={customStyle}>
                            <Paragraph paragraph={paragraph}></Paragraph>
                        </div>
                    );
                }
            )}
        </div>
    );
}
