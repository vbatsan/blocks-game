import {
    SET_SETTINGS,
    FINISH_GAME,
    START_GAME,
    CLEAR_FIELD,
    USER_INC,
    COMPUTER_INC,
    SET_BLOCKS, NEW_GAME, CHANGE_BLOCK_TYPE, ACTIVE_TO_RED, FILTER_PLAYING_BLOCKS,
} from "./types";
import {ACTIVE, GREEN} from "../../../../components/Field/blockTypes";

export const setSettingsAction = (payload) => dispatch => (
    dispatch({
        type: SET_SETTINGS,
        payload
    })
)

export const startGameAction = (payload) => dispatch => {
    dispatch({
        type: START_GAME,
        payload
    })
}


export const finishGameAction = () => dispatch => (
    dispatch({
        type: FINISH_GAME
    })
)

export const clearFieldAction = () => dispatch => (
    dispatch({
        type: CLEAR_FIELD
    })
)

export const userIncAction = () => ({
    type: USER_INC
})


export const computerIncAction = () => ({
    type: COMPUTER_INC
})

export const changeActiveToRedAction = () => ({
    type: ACTIVE_TO_RED
})

export const filterPlayingBlockAction = (payload) => ({
    type: FILTER_PLAYING_BLOCKS,
    payload
})

export const changeBlockTypeAction = (payload) => dispatch => {
    if(payload.type === ACTIVE) {
        dispatch(filterPlayingBlockAction(payload.id))
        dispatch(changeActiveToRedAction())
    }
    if(payload.type === GREEN) dispatch(userIncAction())
    dispatch({
        type: CHANGE_BLOCK_TYPE,
        payload
    })
}


export const setBlocksAction = (payload) => dispatch => {
    dispatch({
        type: SET_BLOCKS,
        payload
    })
}

export const newGameAction = () => dispatch => {
    dispatch({
        type: NEW_GAME
    })
}

