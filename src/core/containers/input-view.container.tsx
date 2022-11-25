import {SyntheticEvent} from "react";

export type InputChangeEvent = (event?: SyntheticEvent) => void;

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
    onChange?: InputChangeEvent;
    onBlur?: InputChangeEvent;
    validate?: ValidateOptions;
    onFocus?: () => void;
    modifiers?: InputModifiers[];
    disabled?: boolean;
    defaultValue?: string | number | null;
}