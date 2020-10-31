import {
    SET_SETTINGS,
    FINISH_GAME,
    START_GAME,
    CLEAR_FIELD,
    USER_INC,
    COMPUTER_INC,
    SET_BLOCKS, NEW_GAME,
} from "./types";

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

export const userIncAction = () => dispatch => {
    dispatch({
        type: USER_INC
    })
}

export const computerIncAction = () => dispatch => {
    dispatch({
        type: COMPUTER_INC
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

