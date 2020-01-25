import React, { useCallback } from 'react';
import {
    makeStyles,
    Theme,
    withStyles,
    createStyles
} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
    IStyledTabsProps,
    IStyledTabProps,
    IPropsMenu
} from '../interfaces/interfaces';

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        '& > div': {
            width: '100%',
            backgroundColor: '#000000'
        }
    }
})((props: IStyledTabsProps) => (
    <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />
));

const StyledTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            color: '#000000',
            maxWidth: '24%',
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: '20px',
            [theme.breakpoints.down('xs')]: {
                fontSize: '14px'
            }
        }
    })
)((props: IStyledTabProps) => <Tab disableRipple {...props} />);

export default function Menu({ onClick, value }: IPropsMenu) {
    const imageLogo = `${process.env.PUBLIC_URL}/assets/images/logo.jpg`;

    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignContent: 'center',
            backgroundColor: '#ffffff'
        },
        logo: {
            height: '50px',
            paddingRight: '20px',
            paddingTop: '5px'
        }
    }));

    const classes = useStyles();

    const a11yProps = useCallback((index: number) => {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`
        };
    }, []);

    const handleChange = useCallback(
        (event: React.ChangeEvent<{}>, newValue: number) => {
            onClick(newValue);
        },
        [onClick]
    );

    return (
        <div className={classes.root}>
            <div>
                <img src={imageLogo} alt="Portada" className={classes.logo} />
            </div>
            <div>
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label="INICIO" {...a11yProps(0)} />
                    <StyledTab label="NOSOTROS" {...a11yProps(1)} />
                    <StyledTab label="TRABAJOS" {...a11yProps(2)} />
                    <StyledTab label="CONTACTO" {...a11yProps(3)} />
                </StyledTabs>
            </div>
        </div>
    );
}
