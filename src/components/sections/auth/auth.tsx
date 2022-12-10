import React, {memo, useEffect, useState} from 'react';
import styles from './auth.module.scss';
import InputView from "../../ui-elements/input-view/input-view";
import Button from "../../ui-elements/button/button";
import Dropdown from "../../ui-elements/dropdown/dropdown";
import {InputTypesEnum} from "../../../core/containers";
import {TypeStore} from "../../../store";
import {
    getAuthRoles, loginUser, postUserData,
    selectAuthErrorRoles, selectAuthErrors,
    selectAuthRoles,
} from "../../../core/slices";
import {connect} from "react-redux";
import {AgreeEnums, LoginParams, RegisterParams, RolesProps} from "../../../core/common-entities";
import set = Reflect.set;


export interface AuthProps {
    roles: RolesProps[],
    errorRoles: any,
    authErrorsMessage: any,
    getRoles: () => void;
    registerUser: (params: RegisterParams) => void;
    loginUser: (params: LoginParams) => void;
}

const Auth: React.FC<AuthProps> = ({
     roles = [],
     errorRoles,
     authErrorsMessage,
     getRoles,
     registerUser,
     loginUser,
}) => {

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [middleName, setMiddleName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [agreeChecked, setAgreeChecked] = useState<boolean>(false);
    const [status, setStatus] = useState<any>(null);
    const [rememberChecking, setRememberChecking] = useState<boolean>(false);

    const getRolesData = () => {
        if (!roles.length) getRoles();
    };

    const sendRegisterData = (event) => {
        event.preventDefault();
        const userData = {
            status: status ? status.id : '',
            name,
            surname,
            middle_name: middleName,
            email,
            password,
            password_confirm: passwordConfirm,
            agree: agreeChecked ? AgreeEnums.true : AgreeEnums.false,
        };
        registerUser(userData);
        clearForm();
    };

    const loginUserData = (event) => {
        event.preventDefault();
        const userData = {
            email,
            password,
            remember: rememberChecking ? AgreeEnums.true : AgreeEnums.false,
        };
        loginUser(userData);
        clearForm();
        console.log(authErrorsMessage, 'authErrorsMessage')
    };

    useEffect(()=>{
        console.log(rememberChecking, 'rememberChecking')
    }, [rememberChecking])

    const clearForm = () => {
        setName('');
        setSurname('');
        setMiddleName('');
        setPassword('');
        setPasswordConfirm('');
        setStatus(null);
        setEmail('');
        setAgreeChecked(false);
    };

    return (
        <div className={styles.auth}>
            {(2 + 2) && (
                <>
                    <h2 className={styles.title}>Вход в личный кабинет</h2>
                    <form className={styles.form} onSubmit={loginUserData}>
                        <InputView
                            name="email"
                            placeholder="Электронная почта *"
                            type={InputTypesEnum.text}
                            value={email}
                            onChange={setEmail}
                        />
                        <InputView
                            name="password"
                            placeholder="Пароль *"
                            type={InputTypesEnum.password}
                            value={password}
                            onChange={setPassword}
                        />
                        <div className={styles.forgot}>
                            <InputView
                                name="remember"
                                type={InputTypesEnum.checkbox}
                                text="Запомнить меня"
                                checked={rememberChecking}
                                onChange={setRememberChecking}
                            />
                            <div className={styles.forgotBtn}>
                                <a href="#" className={styles.link}>Забыли пароль?</a>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <Button
                                text={'Войти'}
                                modifiers={['w100']}
                                type={{type: 'submit'}}
                            />
                            <div className={styles.register}>Зарегистрироваться</div>
                        </div>
                    </form>
                </>
            )}
            {(2 < 0) && (
                <>
                    <h2 className={styles.title}>Зарегистрироваться</h2>
                    <form className={styles.form} onSubmit={sendRegisterData}>
                        <div onClick={getRolesData}>
                            <Dropdown
                                options={roles}
                                selected={status}
                                setSelected={setStatus}
                            />
                        </div>
                        <InputView
                            name="name"
                            placeholder="Имя *"
                            type={InputTypesEnum.text}
                            value={name}
                            onChange={setName}
                        />
                        <InputView
                            name="surname"
                            placeholder="Фамилия *"
                            type={InputTypesEnum.text}
                            value={surname}
                            onChange={setSurname}
                        />
                        <InputView
                            name="middle_name"
                            placeholder="Отчество"
                            type={InputTypesEnum.text}
                            value={middleName}
                            onChange={setMiddleName}
                        />
                        <InputView
                            name="email"
                            placeholder="Электронная почта *"
                            type={InputTypesEnum.text}
                            value={email}
                            onChange={setEmail}
                        />
                        <InputView
                            name="password"
                            placeholder="Пароль *"
                            type={InputTypesEnum.password}
                            value={password}
                            onChange={setPassword}
                        />
                        <InputView
                            name="password_confirm"
                            placeholder="Повторите пароль"
                            type={InputTypesEnum.password}
                            value={passwordConfirm}
                            onChange={setPasswordConfirm}
                        />
                        <div className={styles.forgot}>
                            <InputView
                                name="agree"
                                type={InputTypesEnum.checkbox}
                                text={<div>Согласен на обработку <a href="#">своих персональных данных</a></div>}
                                checked={agreeChecked}
                                onChange={setAgreeChecked}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <Button
                                text={'Зарегистрироваться'}
                                modifiers={['w100']}
                                type={{type: 'submit'}}/>
                            <div className={styles.register}>Я уже зарегистрирован</div>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state: TypeStore) => ({
    roles: selectAuthRoles(state),
    errorRoles: selectAuthErrorRoles(state),
    authErrorsMessage: selectAuthErrors(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    getRoles: () => dispatch(getAuthRoles()),
    registerUser: (params: RegisterParams) => {
        dispatch(postUserData(params))
    },
    loginUser: (params: LoginParams) => {
        dispatch(loginUser(params))
    }
});

const _Auth = connect(
    mapStateToProps,
    mapDispatchToProps,
)(memo(Auth));

export {_Auth as Auth};