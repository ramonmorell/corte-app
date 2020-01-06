import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ContentContext from './context';

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        const data = JSON.parse(xhttp.responseText);
        ReactDOM.render(
            <ContentContext.Provider value={data}>
                <App />
            </ContentContext.Provider>,
            document.getElementById('root')
        );
    }
};

xhttp.open(
    'GET',
    `${process.env.PUBLIC_URL}/assets/content/content.json`,
    true
);

xhttp.send();

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
