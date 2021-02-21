import React, { useEffect} from "react";
import {connect} from "react-redux";

import Block from "./Block"
import FieldWrapper from "./FieldWrapper";
import {computerIncAction, setBlocksAction, changeBlockTypeAction} from "../../store/reducers/app/actions";
import {ACTIVE, NO_ACTIVE} from "./blockTypes";

function Field({
                   isGameStarted,
                   playingBlocks,
                   settings,
                   clearField,
                   blocks,
                   setBlocksAction,
                   changeBlockTypeAction,
               }) {

    function random(max) {
        return Math.floor(Math.random()*max)
    }

    useEffect(() => {
        const arr = [];
        for(let i=0; i < settings.field * settings.field; i++) {
            const blockOptions = {
                id: i,
                type: NO_ACTIVE
            }
            arr.push(blockOptions)
        }
        setBlocksAction(arr)

    },[settings.field, clearField])

    useEffect(() => {
        if(isGameStarted && playingBlocks.length > 0) {
            const randomIndex = random(playingBlocks.length)
            const currentBlockId = playingBlocks[randomIndex].id
            const timer = setTimeout(() => {
                changeBlockTypeAction({id: currentBlockId, type: ACTIVE})
            }, settings.delay)
            return  () =>  clearTimeout(timer)
        }
    },[playingBlocks,isGameStarted])

    return (
            <FieldWrapper blocks={blocks.length}>
                {
                    blocks.map(item => <Block id={item.id} key={item.id} type={item.type}/>)
                }
            </FieldWrapper>
    )
}

const mapStateToProps = state => ({
    isGameStarted: state.app.isGameStarted,
    clearField: state.app.clearField,
    blocks: state.app.blocks,
    playingBlocks: state.app.playingBlocks,
    isGameFinish: state.app.isGameFinish
})

const stateDispatchToProps = {
    computerIncAction,
    setBlocksAction,
    changeBlockTypeAction
}

export default connect(mapStateToProps, stateDispatchToProps)(Field)