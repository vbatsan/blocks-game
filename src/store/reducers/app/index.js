import {
    SET_SETTINGS,
    START_GAME,
    FINISH_GAME,
    CLEAR_FIELD,
    USER_INC,
    COMPUTER_INC,
    SET_BLOCKS, NEW_GAME, CHANGE_BLOCK_TYPE, ACTIVE_TO_RED, FILTER_PLAYING_BLOCKS
} from "./actions/types";
import {ACTIVE, RED} from "../../../components/Field/blockTypes";

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
    playingBlocks:[]
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
                blocks: action.payload,
                playingBlocks: action.payload
            };
        case ACTIVE_TO_RED:
            return {
                ...state,
                blocks: state.blocks.map(item => {
                    if(item.type === ACTIVE) item.type = RED;
                    return item
                }),
                computerCount: state.blocks.filter(item => item.type === RED).length
            };
        case FILTER_PLAYING_BLOCKS:
            return {
                ...state,
                playingBlocks: state.playingBlocks.filter(item => item.id !== action.payload)
            }
        case CHANGE_BLOCK_TYPE:
            return {
                ...state,
                blocks: state.blocks.map(item => {
                    if(item.id === action.payload.id) {
                       return {
                           ...item,
                           type: action.payload.type
                       }
                    }else return item;
                })
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