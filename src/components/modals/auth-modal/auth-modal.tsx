import React, {memo} from 'react';
import UiModal from "../ui-modal/ui-modal";
import {Auth} from "../../sections";

const AuthModal = () => {
    return (
        <UiModal>
            <Auth></Auth>
        </UiModal>
    );
};

const _AuthModal = memo(AuthModal);
export {_AuthModal as AuthModal};