import React from 'react';

const defaultValue = {
    landingPage: [],
    nosotros: [],
    jobsDone: [],
    contacto: []
};

const ContentContext = React.createContext(defaultValue);

export default ContentContext;
