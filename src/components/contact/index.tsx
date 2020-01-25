import React, { CSSProperties, useContext } from 'react';
import ContentContext from '../../context';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Image from '../utils/image';
import {
    IContent,
    IContentElement,
    IParagraphProps
} from '../interfaces/interfaces';
import Container from '@material-ui/core/Container';
import sendMail from '../../email';

function Paragraph({ paragraph }: IParagraphProps) {
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
                {paragraph.images.map((image: string, index: number) => {
                    return <Image key={index} srcName={image} />;
                })}
            </div>
            <div className={classes.root}>
                {paragraph.texts.map((text: string, index: number) => {
                    return (
                        <div key={index}>
                            {index === 0 && (
                                <p className={classes.textsTitle}>
                                    <b>{text}</b>
                                </p>
                            )}
                            {index > 0 && (
                                <p className={classes.texts}>{text}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default function Contact() {
    const { contacto } = useContext<IContent>(ContentContext);
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

    const actionForm = (e: any): any => {
        e.preventDefault();
        console.log('HOLA');
        sendMail('HOLAAAA').then((res: any) => {
            console.log(res);
        });
    };

    return (
        <Container>
            <div style={customStyleRow}>
                {contacto.map((paragraph: IContentElement, index: number) => {
                    return (
                        <div key={index} style={customStyle}>
                            <Paragraph paragraph={paragraph}></Paragraph>
                        </div>
                    );
                })}
            </div>
            <div style={customStyleRow}>
                <form>
                    <input
                        type="hidden"
                        name="subject"
                        placeholder="Subject"
                        value="PRUEBAS"
                    />
                    <textarea name="text" placeholder="Message"></textarea>
                    <input
                        type="hidden"
                        name="access_token"
                        value="w2dzrpbdoqo865q92ylh2wwg"
                    />

                    <input type="hidden" name="success_url" value="." />
                    <input type="hidden" name="error_url" value=".?err=1" />

                    <button onClick={actionForm}> ENVIAR </button>
                </form>
            </div>
        </Container>
    );
}
