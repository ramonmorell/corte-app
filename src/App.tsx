import React from 'react';
import './App.scss';
import MainComponent from './components/main-component';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const App: React.FC = () => {
    const theme = createMuiTheme({
        typography: {
            fontFamily: ['Futura', 'Trebuchet MS', 'Arial', 'sans-serif'].join(
                ','
            )
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <MainComponent />
            </div>
        </ThemeProvider>
    );
};

export default App;
