import React, {memo, useEffect, useState} from 'react';
import {IconNames} from "../../ui-elements/svg/icons-helper";
import {uniqId} from "../../../core/helpers/id-generator";
import ReactDOM from 'react-dom';
import {cn} from "../../../core/helpers/class-names";
import SvgIcon from "../../ui-elements/svg/svg-icon";
import styles from "./ui-modal.module.scss";

interface UIModalProps {
    identifier?: string;
    sectionView?: boolean;
    fullHeight?: boolean;
    children: any;
    portalType?: any;
    customClass?: string;
    closeOnOutsideClick?: boolean;
    closeIcon?: any;
    onClose?: () => void;
}

const UiModal: React.FC<UIModalProps> = (
    {
        identifier,
        sectionView,
        fullHeight,
        children,
        portalType,
        customClass,
        closeOnOutsideClick,
        closeIcon,
        onClose,
    },
) => {

    const id = uniqId();

    const [modal, showModal] = useState<boolean>(false);

    const [container, setContainer] = useState<any>(null);

    const getContainer = (uniqId: any) => {
        const idModal = `modal-${uniqId}`;
        console.log(idModal);

        let portal = document.getElementById(idModal);
        if (!portal) {
            portal = document.createElement('div');
            portal.setAttribute('id', idModal);
            document.body.appendChild(portal);
        }
        return portal;
    };

    const removeContainer = (uniqId: any) => {
        const portal = document.getElementById(`modal-${uniqId}`);
        if (portal) portal.remove();
    };

    const closeModalByButton = () => {
        showModal(false);
    }

    useEffect(() => {
        setContainer(getContainer(id));

        return () => {
            removeContainer(id);
        };
    }, [uniqId]);

    return (
        <>
                    {modal && !!container && ReactDOM.createPortal(
                        <div className={styles.overlay} onClick={() => showModal(false)}>
                            <div
                                className={cn([
                                    styles.modal,
                                    sectionView && styles.sectionView,
                                    fullHeight && styles.fullHeight,
                                    portalType,
                                    customClass,
                                ])}
                            >
                                <div className={styles.dialog}>
                                    <div className={styles.content} onClick={e => e.stopPropagation()}>
                                        <button
                                            className={styles.close}
                                            type="button"
                                            onClick={onClose || closeModalByButton}
                                        >
                                            {closeIcon &&  <SvgIcon name={closeIcon} />}
                                            {!closeIcon &&  <SvgIcon name={'ModalClose'} />}
                                        </button>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>,
                        container,
                    )}
        </>
   );
};

export default memo(UiModal);