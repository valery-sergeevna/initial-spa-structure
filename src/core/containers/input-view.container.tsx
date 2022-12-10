import {SyntheticEvent} from "react";

// @ts-ignore
export type InputModifiers =
    | 'small'
    | 'disabled'
    | 'password';

export type InputTypes =
    | 'text'
    | 'password'
    | 'radio'
    | 'checkbox';

export enum InputTypesEnum {
    text = 'text',
    password = 'password',
    radio = 'radio',
    checkbox = 'checkbox'
}

// @ts-ignore
export type ValidateOptions =
    | 'email'
    | 'password'
    | 'notEmpty'
    | 'minMaxLength'
    | 'checked';

export interface InputViewProps {
    name: string;
    text?: any;
    type?: InputTypes;
    placeholder?: string;
    value?: string;
    error?: boolean;
    minLength?: number;
    maxLength?: number;
    onBlur?: () => void;
    validate?: ValidateOptions;
    onChange?: (data: any) => void;
    onFocus?: () => void;
    modifiers?: InputModifiers[];
    disabled?: boolean;
    checked?: boolean;
}