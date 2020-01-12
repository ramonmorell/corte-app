export interface IContent {
    landingPage: IContentElement[];
    nosotros: IContentElement[];
}

export interface IContentElement {
    texts: string[];
    images: string[];
}

export interface IImageProps {
    srcName: string;
}

export interface ICarouselProps {
    content: IContentElement;
}

export interface IButonsJobsDone {
    url: string;
    title: string;
    width: string;
}

export interface ILandingPageCarouselImage {
    srcName: string;
    title: string;
}

export interface ILandingPageCarousel {
    content: IContentElement;
}
