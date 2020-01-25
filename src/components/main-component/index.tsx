import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import HideOnScroll from '../main-component-hide-onscroll';
import TabPanel from '../main-component-tab-panel';
import Menu from '../menu';
import LandingPage from '../landing-page';
import Us from '../us';
import JobsDone from '../jobs-done';
import Contact from '../contact';

export default function MainComponent() {
    const theme = useTheme();

    const [indexMenuSelected, setIndexMenuSelected] = useState(0);

    const handleClickMenu = useCallback(
        (index: number) => {
            setIndexMenuSelected(index);
        },
        [setIndexMenuSelected]
    );

    const handleChangeIndex = useCallback(
        (index: number) => {
            setIndexMenuSelected(index);
        },
        [setIndexMenuSelected]
    );

    return (
        <>
            <CssBaseline />
            <HideOnScroll>
                <AppBar style={{ backgroundColor: '#ffffff' }}>
                    <Toolbar className="ToolBarCustom">
                        <Menu
                            onClick={handleClickMenu}
                            value={indexMenuSelected}
                        ></Menu>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            {/* <Container> */}
            <Box my={2}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={indexMenuSelected}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel
                        value={indexMenuSelected}
                        index={0}
                        dir={theme.direction}
                    >
                        <LandingPage />
                    </TabPanel>
                    <TabPanel
                        value={indexMenuSelected}
                        index={1}
                        dir={theme.direction}
                    >
                        <Us />
                    </TabPanel>
                    <TabPanel
                        value={indexMenuSelected}
                        index={2}
                        dir={theme.direction}
                    >
                        <JobsDone />
                    </TabPanel>
                    <TabPanel
                        value={indexMenuSelected}
                        index={3}
                        dir={theme.direction}
                    >
                        <Contact />
                    </TabPanel>
                </SwipeableViews>
            </Box>
            {/* </Container> */}
        </>
    );
}
