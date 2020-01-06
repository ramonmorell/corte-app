import React, { useCallback } from 'react';
import {
    makeStyles,
    Theme,
    withStyles,
    createStyles
} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import image from '../../assets/images/portada1.jpg';

interface StyledTabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

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
})((props: StyledTabsProps) => (
    <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />
));

interface StyledTabProps {
    label: string;
}

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
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface PropsMenu {
    value: number;
    onClick: (value: number) => void;
}

export default function Menu({ onClick, value }: PropsMenu) {
    const image = `${process.env.PUBLIC_URL}/assets/images/portada1.jpg`;
    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignContent: 'center',
            backgroundColor: '#ffffff'
        }
    }));

    const classes = useStyles();

    const a11yProps = useCallback((index: any) => {
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
            <img
                src={image}
                alt="Portada"
                style={{ height: '56px', paddingRight: '20px' }}
            />
            <StyledTabs value={value} onChange={handleChange}>
                <StyledTab label="INICIO" {...a11yProps(0)} />
                <StyledTab label="NOSOTROS" {...a11yProps(1)} />
                <StyledTab label="TRABAJOS" {...a11yProps(2)} />
                <StyledTab label="CONTACTO" {...a11yProps(3)} />
            </StyledTabs>
        </div>
    );
}
