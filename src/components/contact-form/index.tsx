import React, {
    useState,
    ChangeEvent,
    useEffect,
    useCallback,
    useMemo
} from 'react';
import {
    Theme,
    makeStyles,
    createStyles,
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles';
import sendMail from '../../email';
import { TextField, Button } from '@material-ui/core';
import { ContactFormProps, FormData } from '../interfaces/interfaces';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ContactForm({ formCallBack }: ContactFormProps) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                [theme.breakpoints.down('xs')]: {},

                '& .MuiTextField-root': {
                    margin: theme.spacing(0.5)
                }
            },
            buttonBox: {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-around'
            },
            button: {
                marginTop: '10px'
            }
        })
    );

    const sucessIntention = {
        light: '#35cc65',
        main: '#47b361',
        dark: '#37ad5a',
        contrastText: '#fff'
    };

    const cleanIntention = {
        light: '#d64f4f',
        main: '#db2e2e',
        dark: '#911111',
        contrastText: '#fff'
    };

    const themeSubmit = createMuiTheme({
        palette: {
            primary: sucessIntention,
            secondary: cleanIntention
        }
    });

    const classes = useStyles();

    const initialStateForm = useMemo(
        () => ({
            name: '',
            telephone: '',
            email: '',
            msg: ''
        }),
        []
    );

    const [formData, SetFormData] = useState<FormData>(initialStateForm);

    const [disableSubmit, setDisableSubmit] = useState(true);

    const [disableClean, setDisableClean] = useState(true);

    const validateForm = useCallback((formData: FormData): boolean => {
        if (
            formData.name &&
            (formData.email || formData.telephone) &&
            formData.msg
        ) {
            return true;
        }
        return false;
    }, []);

    const checkEmptyForm = useCallback((formData: FormData): boolean => {
        if (
            formData.name ||
            formData.email ||
            formData.telephone ||
            formData.msg
        ) {
            return false;
        }
        return true;
    }, []);

    useEffect(() => {
        setDisableSubmit(!validateForm(formData));
        setDisableClean(checkEmptyForm(formData));
    }, [formData, validateForm, checkEmptyForm]);

    const createmesg = (formData: FormData): string => {
        const res = `Nombre: ${formData.name}\nTelefono: ${formData.telephone}\nEmail: ${formData.email}\nMensaje: ${formData.msg}`;

        return res;
    };

    const handleChangeInputs = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            SetFormData({
                ...formData,
                [e.currentTarget.name]: e.currentTarget.value
            });
        },
        [formData]
    );

    const handleSubmit = useCallback(
        (e: any) => {
            e.preventDefault();
            formCallBack(false, false, '');
            if (validateForm(formData)) {
                const msg = createmesg(formData);
                setDisableClean(true);
                setDisableSubmit(true);
                sendMail(msg).then((res: any) => {
                    if (res.status !== 200) {
                        formCallBack(
                            true,
                            true,
                            'Error al enviar el mesaje...'
                        );
                    } else {
                        formCallBack(
                            true,
                            false,
                            'Mensaje enviado correctamente!'
                        );
                    }
                    setTimeout(() => {
                        setDisableClean(false);
                        setDisableSubmit(false);
                    }, 1000);
                });
            }
        },
        [formData, formCallBack, validateForm]
    );

    const handleClickClean = useCallback(
        (e: any) => {
            SetFormData(initialStateForm);
        },
        [initialStateForm]
    );

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    label="Tu nombre"
                    type="text"
                    fullWidth
                    onChange={handleChangeInputs}
                    inputProps={{ maxLength: 50 }}
                    value={formData.name}
                />
                <TextField
                    id="telefono"
                    label="Tu teléfono"
                    name="telephone"
                    type="text"
                    inputProps={{ maxLength: 12 }}
                    fullWidth
                    onChange={handleChangeInputs}
                    value={formData.telephone}
                />
                <TextField
                    id="email"
                    label="Tu Email"
                    name="email"
                    type="email"
                    fullWidth
                    onChange={handleChangeInputs}
                    inputProps={{ maxLength: 75 }}
                    value={formData.email}
                />
                <TextField
                    id="mesage"
                    label="Mensaje"
                    name="msg"
                    multiline
                    rowsMax="4"
                    inputProps={{ maxLength: 300 }}
                    rows="4"
                    placeholder="Escribe aquí tu mensaje ..."
                    variant="outlined"
                    fullWidth
                    onChange={handleChangeInputs}
                    value={formData.msg}
                />
                <ThemeProvider theme={themeSubmit}>
                    <div className={classes.buttonBox}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={disableSubmit}
                            className={classes.button}
                        >
                            <SendIcon style={{ marginRight: '10px' }} />
                            Enviar mensaje
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            disabled={disableClean}
                            onClick={handleClickClean}
                            className={classes.button}
                        >
                            <DeleteIcon style={{ marginRight: '10px' }} />
                            Limpiar
                        </Button>
                    </div>
                </ThemeProvider>
            </form>
        </div>
    );
}
