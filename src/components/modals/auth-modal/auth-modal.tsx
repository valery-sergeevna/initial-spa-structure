import React, {memo, useState} from 'react';
import UiModal from "../ui-modal/ui-modal";
import styles from './auth-modal.module.scss';
import InputView from "../../ui-elements/input-view/input-view";
import Button from "../../ui-elements/button/button";
import {InputTypesEnum} from "../../../core/containers/input-view.container";
import Dropdown from "../../ui-elements/dropdown/dropdown";

const OPTIONS_STATUS: any = [
    { value: 'entepreneur', label: 'Предприниматель' },
    { value: 'customer', label: 'Покупатель' },
    { value: 'seller', label: 'Продавец' },
];

const AuthModal = () => {

    return (
        <UiModal>
            {(2 < 0) && (
                <>
                    <h2 className={styles.title}>Вход в личный кабинет</h2>
                    <form className={styles.form}>
                        <InputView
                            name="email"
                            placeholder="Электронная почта *"
                            type={InputTypesEnum.text}
                        />
                        <InputView
                            name="password"
                            placeholder="Пароль *"
                            type={InputTypesEnum.password}
                        />
                        <div className={styles.forgot}>
                            <InputView
                                name="remember"
                                type={InputTypesEnum.checkbox}
                                text="Запомнить меня"
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
            {(5 + 7) && (
                <>
                    <h2 className={styles.title}>Зарегистрироваться</h2>
                    <form className={styles.form}>
                        <Dropdown options={OPTIONS_STATUS}/>
                        <InputView
                            name="name"
                            placeholder="Имя *"
                            type={InputTypesEnum.text}
                        />
                        <InputView
                            name="surname"
                            placeholder="Фамилия *"
                            type={InputTypesEnum.text}
                        />
                        <InputView
                            name="middle_name"
                            placeholder="Отчество"
                            type={InputTypesEnum.text}
                        />
                        <InputView
                            name="email"
                            placeholder="Электронная почта *"
                            type={InputTypesEnum.text}
                        />
                        <InputView
                            name="password"
                            placeholder="Пароль *"
                            type={InputTypesEnum.password}
                        />
                        <InputView
                            name="password_confirm"
                            placeholder="Повторите пароль"
                            type={InputTypesEnum.password}
                        />
                        <div className={styles.forgot}>
                            <InputView
                                name="agree"
                                type={InputTypesEnum.checkbox}
                                text={<div>Согласен на обработку <a href="#">своих персональных данных</a></div>}
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
        </UiModal>

    );
};

export default memo(AuthModal);