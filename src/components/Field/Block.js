import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux';

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

 function Block({id, type, changeBlockTypeAction}) {

    function handleClick() {
        if(type === ACTIVE) {
            changeBlockTypeAction({id, type: GREEN})
        }
    }
    return (
        <StyledBlock
            type={type}
            onClick={() => handleClick()}
        />
    )
}

 const mapStateToProps = state => ({
     clearField: state.app.clearField,
     blocks: state.app.blocks
 })

export default connect(mapStateToProps, {changeBlockTypeAction}) (Block)