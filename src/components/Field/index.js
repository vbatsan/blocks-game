import React, { useEffect, useRef} from "react";
import {connect} from "react-redux";

import Block from "./Block"
import FieldWrapper from "./FieldWrapper";
import {computerIncAction, setBlocksAction} from "../../store/reducers/app/actions";
import {ACTIVE, NO_ACTIVE, RED} from "./blockTypes";

function Field({isGameStarted, settings, clearField, computerIncAction, blocks, setBlocksAction}) {

    const args = useRef([])
    let index = useRef(-1)

    function random(max) {
        return Math.floor(Math.random()*max)

    }
    function changeToRed(block) {
        block.type = RED
        computerIncAction()
    }
    function generateRandomIndex() {
        const num  = random(blocks.length)
        if(!args.current.includes(num) && num !== undefined) {
            args.current.push(num)
            index.current = num
            return
        }
        requestAnimationFrame(generateRandomIndex)

    }

    useEffect(() => {
        args.current = []
        index.current = -1
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
        if(isGameStarted) {
            const blocksArr = [...blocks]

            const frame = requestAnimationFrame(generateRandomIndex)
            const internal = setTimeout(() => {
                const prevBlock = blocksArr[args.current[args.current.length - 2]]
                if((args.current.length > 0 && prevBlock?.type === ACTIVE)) {
                   changeToRed(prevBlock)
                }
                if(index.current === args.current[args.current.length -1] &&  blocksArr[index.current].type === ACTIVE) {
                    changeToRed(blocksArr[index.current])
                    setBlocksAction(blocksArr)
                }

                blocksArr[index.current].type = ACTIVE
                setBlocksAction(blocksArr)
            },settings.delay)
            return () => {
                clearTimeout(internal)
                cancelAnimationFrame(frame)
            }
        }

    }, [blocks, isGameStarted])


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
})

const stateDispatchToProps = {
    computerIncAction,
    setBlocksAction,
}

export default connect(mapStateToProps, stateDispatchToProps)(Field)