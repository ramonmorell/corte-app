import React from 'react';
import { IContent } from '../components/interfaces/interfaces';

const defaultValue: IContent = {
    inicio: [],
    nosotros: [],
    trabajos: [],
    contacto: []
};

const ContentContext = React.createContext(defaultValue);

export default ContentContext;
