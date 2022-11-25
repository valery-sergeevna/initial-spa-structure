import React, {memo} from 'react';
import {IconNames, SvgIcons} from "./icons-helper";


interface SvgIconsProps{
    name: IconNames;
    className?: string;
    viewBox?: string;
    title?: string;
}

const SvgIcon: React.FC<SvgIconsProps> = ({
    name,
    className,
    viewBox,
    title,
}) => {

    return (
        <span
            className={className}
        >
            {title && <title>{title}</title>}
            {SvgIcons[name]()}
        </span>
    );
};

export default memo(SvgIcon);