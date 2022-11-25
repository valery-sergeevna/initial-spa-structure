import React, {memo, useState} from 'react';
import Select from "react-select";
import styles from './dropdown.module.scss';

interface DropdownProps {
    options: [];
}

const Dropdown: React.FC<DropdownProps> = ({
    options = [],
}) => {
    const [selected, setSelected] = useState<any>(null);
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