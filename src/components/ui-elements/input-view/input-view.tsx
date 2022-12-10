import React, {memo, useEffect, useRef, useState} from 'react';
import styles from './input-view.module.scss';
import SvgIcon from "../svg/svg-icon";
import {InputTypesEnum, InputViewProps} from "../../../core/containers";
import {cn} from "../../../core/helpers";

const InputView: React.FC<InputViewProps> = ({
     type,
     placeholder,
     value,
     error,
     minLength,
     maxLength,
     onChange,
     onBlur,
     validate,
     text,
     onFocus,
     modifiers = [],
     disabled,
     name,
     checked,
}) => {
    const [passwordType, setPasswordType] = useState<string>("password");
    const [inputError, setError] = useState<any>(error);
    const [inputData, setInputData] = useState(value || '');

    const togglePassword = () => {
        if(passwordType === InputTypesEnum.password) {
            return setPasswordType(InputTypesEnum.text);
        }
        setPasswordType(InputTypesEnum.password);
    };

    const onChangeFromProps = (e) => {
        if(onChange) {
            const { target } = e,
                valueInput = target.value;

            if(target.type === 'checkbox'){
                return onChange(!checked);
            }
            return onChange(valueInput);
        }
    };

    return (
        <div className={cn([
            type !== InputTypesEnum.checkbox && styles.input,
            type === InputTypesEnum.checkbox && styles.checkbox,
        ])}>
            <label className={styles.dFlex}>
                <input
                    name={name}
                    autoComplete="false"
                    onBlur={onBlur}
                    onChange={onChangeFromProps}
                    onFocus={onFocus}
                    disabled={disabled}
                    value={value}
                    checked={checked}
                    minLength={minLength || 0}
                    maxLength={maxLength || 100}
                    placeholder={placeholder || ''}
                    type={type === InputTypesEnum.password ? passwordType : (type || InputTypesEnum.text)}
                    className={cn([
                        !modifiers.includes('small') && styles.small,
                    ])}
                />
                {type === InputTypesEnum.password && (
                    <span className={styles.buttonPassword} onClick={togglePassword}>
                       <SvgIcon name={passwordType === InputTypesEnum.password ? 'EyeClose' : 'EyeOpen' } />
                    </span>
                )}
                {type === InputTypesEnum.checkbox && (
                    <span className={styles.customCheckbox}></span>
                )}
                {text && <span className={styles.text}>{text}</span>}
            </label>
        </div>
    );
};

export default memo(InputView);