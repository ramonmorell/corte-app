import React, { useState } from 'react';
import { ImageProps } from '../interfaces/interfaces';

export default function Image({ srcName = '' }: ImageProps) {
    const [srcImage, setSrcImage] = useState<any>({});
    import(`../../assets/images/${srcName}.jpg`).then((image: any) => {
        setSrcImage(image.default);
    });

    return (
        <>
            {srcImage && (
                <img src={srcImage} alt={srcName} style={{ width: '100%' }} />
            )}
        </>
    );
}
