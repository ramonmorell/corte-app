export interface IContent {
    landingPage: IContentElement[];
    nosotros: IContentElement[];
}

export interface IContentElement {
    texts: string[];
    images: string[];
}

export interface ImageProps {
    srcName: string;
}
