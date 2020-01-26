export interface IContent {
    inicio: IContentElement[];
    nosotros: IContentElement[];
    trabajos: IContentElement[];
    contacto: IContentElement[];
}

export interface IContentElement {
    texts: string[];
    images: string[];
}

export interface IStyledTabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

export interface IStyledTabProps {
    label: string;
}

export interface IPropsMenu {
    value: number;
    onClick: (value: number) => void;
}

export interface ITabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

export interface IHideOnScrollProps {
    children?: React.ReactElement;
}

export interface IImageProps {
    srcName: string;
}

export interface ICarouselProps {
    content: IContentElement;
}

export interface IJobsDoneButons {
    url: string;
    title: string;
    width: string;
}

export interface ILandingPageCarouselImage {
    srcName: string;
    title: string;
    extraText: string;
}

export interface ILandingPageCarousel {
    content: IContentElement[];
}

export interface IParagraphProps {
    paragraph: IContentElement;
}

export interface ContactFormProps {
    formCallBack: (show: boolean, error: boolean, msg: string) => void;
}

export interface FormData {
    name: string;
    telephone: string;
    email: string;
    msg: string;
}

export interface FormError {
    show: boolean;
    error: boolean;
    msg: string;
}
