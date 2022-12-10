import React from 'react';
import styles from './registration.module.scss';
import {Auth} from "../../components/sections";

const Registration = () => {
    return (
        <div className={styles.registration}>
            <Auth/>
        </div>
    );
};

export default Registration;