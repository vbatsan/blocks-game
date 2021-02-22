import React from 'react'
import styled from "styled-components";
import {useDispatch} from 'react-redux';

import { changeBlockTypeAction} from "../../store/reducers/app/actions";

import {ACTIVE, GREEN, NO_ACTIVE, RED} from "./blockTypes";

const StyledBlock = styled.div`
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    background-color: ${({type}) => {
        switch (type) {
            case ACTIVE:
                return '#46b5ff';
            case NO_ACTIVE:
                return '#5dffca';
            case RED:
                return '#ff2b3b';
            case GREEN:
                return '#229517';
            default:
                return '#5dffca'
        }
}};
    border: 1px solid black;
`;

 function Block({id, type}) {
     const dispatch = useDispatch()

    function handleClick() {
        if(type === ACTIVE) {
            dispatch(changeBlockTypeAction({id, type: GREEN}))
        }
    }
    return (
        <StyledBlock
            type={type}
            onClick={() => handleClick()}
        />
    )
}

export default Block