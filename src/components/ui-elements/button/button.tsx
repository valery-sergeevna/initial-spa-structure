import React, {memo, ReactElement, SyntheticEvent} from 'react';
import styles from './button.module.scss';
import { cn } from '../../../core/helpers/class-names';


interface ButtonProps {
    text: string;
    type?: Props;
    children?: ReactElement;
    className?: string;
    disabled?: boolean;
    modifiers?: ButtonModifiers[];
    clickHandler?: (e?: SyntheticEvent) => void;
}

interface Props {
    type: 'button' | 'submit' | 'reset';
}

export type ButtonModifiers =
    | 'disabled'
    | 'light'
    | 'small'
    | 'big'
    | 'default'
    | 'w100';


const Button: React.FC<ButtonProps> = ({
    text,
    children,
    modifiers = [],
    type = {type: 'button'},
    className = '',
    disabled = false,
    clickHandler = () => {},
}) => {

    const buttonClassName = `${styles.button} ${className} ${
        disabled ? 'button--disabled' : ''
    }`;

    return (
        <button
            type={type.type}
            className={cn([
                buttonClassName,
                modifiers.includes('small') && styles.small,
                modifiers.includes('w100') && styles.w100,
            ])}
            onClick={clickHandler}
            disabled={disabled}
        >
            {!!children && (
                <>{children}</>
            )}
            {!children && (
                 <span>{text}</span>
            )}
        </button>
    );
};

export default memo(Button);