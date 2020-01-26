import React, { useContext, useMemo, useState, useCallback } from 'react';
import ContentContext from '../../context';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Image from '../utils/image';
import {
    IContent,
    IContentElement,
    IParagraphProps,
    FormError
} from '../interfaces/interfaces';
import Container from '@material-ui/core/Container';
import ContactForm from '../contact-form';

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

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            customStyle: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            },
            customStyleRow: {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            },
            formCaption: {
                width: '49%',
                [theme.breakpoints.down('xs')]: {
                    width: '100%'
                }
            },
            formContainer: {
                width: '50%',
                [theme.breakpoints.down('xs')]: {
                    width: '100%'
                }
            },
            texts: {
                textAlign: 'left',
                fontSize: '19px',
                margin: '4px'
            },
            textsSucess: {
                color: 'green',
                textAlign: 'left',
                fontSize: '19px',
                margin: '4px'
            },
            textsError: {
                color: 'red',
                textAlign: 'left',
                fontSize: '19px',
                margin: '4px'
            }
        })
    );

    const classes = useStyles();

    const initialError = useMemo(
        () => ({
            show: false,
            error: false,
            msg: ''
        }),
        []
    );

    const [error, setError] = useState<FormError>(initialError);

    const handleContactFormCallback = useCallback(
        (show: boolean, error: boolean, msg: string) => {
            setError({
                show: show,
                error: error,
                msg: msg
            });
        },
        []
    );

    return (
        <Container>
            <div className={classes.customStyleRow}>
                {contacto.map((paragraph: IContentElement, index: number) => {
                    return (
                        <div key={index} className={classes.customStyle}>
                            <Paragraph paragraph={paragraph}></Paragraph>
                        </div>
                    );
                })}
            </div>
            <div className={classes.customStyleRow}>
                <div className={classes.formCaption}>
                    <br></br>
                    <p className={classes.texts}>
                        Si lo prefieres, dejanos un mensaje y nos pondremos en
                        contacto contigo! (máximo 300 caracteres)
                    </p>
                    <br></br>
                    {error.show ? (
                        error.error ? (
                            <p className={classes.textsError}>{error.msg}</p>
                        ) : (
                            <p className={classes.textsSucess}>{error.msg}</p>
                        )
                    ) : (
                        <br></br>
                    )}
                </div>
                <div className={classes.formContainer}>
                    <ContactForm
                        formCallBack={handleContactFormCallback}
                    ></ContactForm>
                </div>
            </div>
        </Container>
    );
}
