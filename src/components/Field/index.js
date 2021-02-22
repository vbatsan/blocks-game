import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Block from "./Block"
import FieldWrapper from "./FieldWrapper";
import { setBlocksAction, changeBlockTypeAction} from "../../store/reducers/app/actions";
import {ACTIVE, NO_ACTIVE} from "./blockTypes";
import {
    blocksSelector,
    clearFieldSelector,
    isGameStartedSelector,
    playingBlocksSelector
} from "../../store/reducers/app/selectors";

function Field({settings}) {
    const isGameStarted = useSelector(isGameStartedSelector)
    const playingBlocks = useSelector(playingBlocksSelector)
    const clearField = useSelector(clearFieldSelector)
    const blocks = useSelector(blocksSelector)
    const dispatch = useDispatch()

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
        dispatch(setBlocksAction(arr))

    },[settings.field, clearField])

    useEffect(() => {
        if(isGameStarted && playingBlocks.length > 0) {
            const randomIndex = random(playingBlocks.length)
            const currentBlockId = playingBlocks[randomIndex].id
            const timer = setTimeout(() => {
                dispatch(changeBlockTypeAction({id: currentBlockId, type: ACTIVE}))
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

export default Field