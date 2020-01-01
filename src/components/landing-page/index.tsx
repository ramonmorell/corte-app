import React from 'react';
import content from '../../assets/content/content.json';
import { IContentElement } from '../interfaces/interfaces';
import Image from '../utils/image';

export default function Main() {
    return (
        <div>
            {content.landingPage.map(
                (contentElement: IContentElement, indexContent: number) => {
                    return (
                        <div key={indexContent}>
                            {contentElement.texts.map(
                                (text: string, index: number) => {
                                    return <p key={index}>{text}</p>;
                                }
                            )}
                            {contentElement.images.map(
                                (image: string, index: number) => {
                                    return (
                                        <Image key={index} srcName={image} />
                                    );
                                }
                            )}
                        </div>
                    );
                }
            )}
        </div>
    );
}
