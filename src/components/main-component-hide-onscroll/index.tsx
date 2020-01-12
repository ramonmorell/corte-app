import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { IHideOnScrollProps } from '../interfaces/interfaces';

export default function HideOnScroll({ children }: IHideOnScrollProps) {
    const trigger = useScrollTrigger(undefined);

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
