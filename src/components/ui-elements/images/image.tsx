import React, {memo} from 'react';

export interface ImageProps {
    name: string;
    title?: string;
    alt?: string;
    className?: string;
    onErrorCapture?: (event: any) => void;
    onLoad?: () => void;
    height?: string | number | null;
    width?: string | number | null;
}

const Image: React.FC<ImageProps> = ({
    name,
    title,
    alt,
    className,
    onErrorCapture = () => {},
    onLoad,
    height,
    width,
}) => {
    const imageSrc = require(`../../../assets/images/${name}`);

    return (
        <img
            src={imageSrc}
            title={title}
            alt={alt}
            className={className || ''}
            onLoad={onLoad}
            onError={(e) => onErrorCapture(e)}
            decoding="async"
            height={400}
            width={500}
        />
    )
};

export default memo(Image);