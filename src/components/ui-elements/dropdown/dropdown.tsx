import React, {memo, useState} from 'react';
import Select from "react-select";
import styles from './dropdown.module.scss';

interface DropdownProps {
    options: any;
    selected: any;
    setSelected: (event) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
    options = [],
    selected,
    setSelected,
}) => {
    console.log(options, 'options')
    const onChange = (e: any) => {
        setSelected(e);
    };

    return (
        <div className={styles.select}>
            <Select
                placeholder="Статус на сайте"
                value={selected}
                options={options || []}
                classNamePrefix='select'
                onChange={(event) => onChange(event)}
                isClearable={true}
            />
        </div>
    );
};

export default memo(Dropdown);