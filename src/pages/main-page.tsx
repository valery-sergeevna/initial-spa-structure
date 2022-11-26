import React, {Dispatch, memo, SetStateAction, useEffect} from 'react';
import {connect, DispatchProp} from 'react-redux';
import Image from "../components/ui-elements/images/image";
import Button from "../components/ui-elements/button/button";
import {selectValueNumber} from "../core/slices/auth-slice";
import {TypeStore} from "../store/type-store";
import {increment, incrementByAmount} from '../core/slices/auth-slice';


export interface MainPageProps {
    value: number;
    incrementByAmount: (value: number) => void;
}

const MainPage: React.FC<MainPageProps> = ({
    value,
    incrementByAmount,
}) => {
    return (
        <>
            <Image name="47.jpg"/>
            {value}
            <Button
                text={'Hello'}
                clickHandler={()=>incrementByAmount(5)}
            />
        </>
    );
};

const mapStateToProps = (state: TypeStore) => ({
    value: selectValueNumber(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    incrementValue: () => {
        dispatch(increment());
    },
    incrementByAmount: (value: number) => {
        dispatch(incrementByAmount(value));
    }
});

const _MainPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(memo(MainPage));

export {_MainPage as MainPage};