import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Menu from '../menu';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import JobsDone from '../jobs-done';
import Us from '../us';
import LandingPage from '../landing-page';
import Contact from '../contact';

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: any;
	value: any;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

interface HideOnScrollProps {
	children?: React.ReactElement;
}

function HideOnScroll( { children } : HideOnScrollProps) {
	const trigger = useScrollTrigger(undefined);

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function MainComponent () {
	const theme = useTheme();
	
	const [value, setValue] = useState(0);

	const handleClickMenu = (e: number) => {
		setValue(e);
	};

	const handleChangeIndex = (index: number) => {
		setValue(index);
	};

	return (
		<>
			<CssBaseline />
			<HideOnScroll>
				<AppBar style={{backgroundColor:'#ffffff'}}>
					<Toolbar className="ToolBarCustom">
						<Menu onClick={handleClickMenu} value={value}></Menu>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<Container>
				<Box my={2}>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={handleChangeIndex}>
						<TabPanel value={value} index={0} dir={theme.direction}>
							<LandingPage />
						</TabPanel>
						<TabPanel value={value} index={1} dir={theme.direction}>
							<Us></Us>
						</TabPanel>
						<TabPanel value={value} index={2} dir={theme.direction}>
							<JobsDone />
						</TabPanel>
						<TabPanel value={value} index={3} dir={theme.direction}>
							<Contact />
						</TabPanel>
					</SwipeableViews>
				</Box>
			</Container>
		</>
	);
}
