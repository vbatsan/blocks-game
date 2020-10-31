import {
    SET_SETTINGS,
    START_GAME,
    FINISH_GAME,
    CLEAR_FIELD,
    USER_INC,
    COMPUTER_INC,
    SET_BLOCKS, NEW_GAME
} from "./actions/types";

const initialState = {
    isGameStarted: false,
    isGameFinish: false,
    settings: {
        field: 0,
        delay: 0
    },
    userName: '',
    clearField: false,
    userCount: 0,
    computerCount: 0,
    blocks: [],
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case "FINISH":
            return {
                ...state,
                game: "FINISHED"
            };
        case SET_SETTINGS:
            return {
                ...state,
                settings: action.payload
            };
        case START_GAME:
            return {
                ...state,
                isGameStarted: true,
                isGameFinish: false,
                userName: action.payload,
                userCount: 0,
                computerCount: 0,
                isShowMessage: false
            };
        case FINISH_GAME:
            return {
                ...state,
                isGameStarted: false,
                isGameFinish: true,
                isShowMessage: true
            };
        case CLEAR_FIELD:
            return {
                ...state,
                clearField: !state.clearField
            };
        case USER_INC:
            return {
                ...state,
                userCount: state.userCount + 1
            };
        case COMPUTER_INC:
            return {
                ...state,
                computerCount: state.computerCount + 1
            };
        case SET_BLOCKS:
            return {
                ...state,
                blocks: state.blocks = action.payload
            };

        case NEW_GAME:
            return {
                ...state,
                isGameStarted: false
            };
        default:
                return state
    }
}