import React from 'react';

const defaultValue = {
    inicio: [],
    nosotros: [],
    trabajos: [],
    contacto: []
};

const ContentContext = React.createContext(defaultValue);

export default ContentContext;
