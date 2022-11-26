import React, {Dispatch, memo, SetStateAction, useEffect, useMemo} from 'react';
import {connect, DispatchProp} from 'react-redux';
import Image from "../components/ui-elements/images/image";
import Button from "../components/ui-elements/button/button";
import {EntityProps, fetchAuthEntity, incrementByAmount, increment, selectEntity, selectValueNumber} from "../core/slices";
import {TypeStore} from "../store";


export interface MainPageProps {
    value: number;
    entity: EntityProps,
    fetchAuthData: () => void;
    incrementByAmount: (value: number) => void;
}

const MainPage: React.FC<MainPageProps> = ({
    value,
    incrementByAmount,
    entity,
    fetchAuthData,
}) => {

    useEffect(()=>{
        console.log(entity, 'entities 1');
        fetchAuthData();
        console.log(entity, 'entities 2');
    }, [])

    return (
        <>
            <Image name="47.jpg"/>
            {entity.title}
            <Button
                text={'Hello'}
                clickHandler={()=>incrementByAmount(5)}
            />
        </>
    );
};

const mapStateToProps = (state: TypeStore) => ({
    value: selectValueNumber(state),
    entity: selectEntity(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    incrementValue: () => {
        dispatch(increment());
    },
    incrementByAmount: (value: number) => {
        dispatch(incrementByAmount(value));
    },
    fetchAuthData: () => {
        dispatch(fetchAuthEntity());
    }
});

const _MainPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(memo(MainPage));

export {_MainPage as MainPage};