import React from 'react';
import { ImageProps } from '../interfaces/interfaces';

export default function Image({ srcName = '' }: ImageProps) {
    return (
        <>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/${srcName}.jpg`}
                alt={'%PUBLIC_URL%/' + srcName + '.jpg'}
                style={{ width: '100%' }}
            />
        </>
    );
}
