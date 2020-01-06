import React from 'react';

const defaultValue = {
    landingPage: [],
    nosotros: [],
    jobsDone: []
};

const ContentContext = React.createContext(defaultValue);

export default ContentContext;
