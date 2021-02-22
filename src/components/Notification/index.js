import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Message from "./Message";
import {finishGameAction} from "../../store/reducers/app/actions";
import {
    computerCountSelector,
    fieldSizeSelector,
    isGameFinishSelector,
    userCountSelector, userNameSelector
} from "../../store/reducers/app/selectors";

function Notification() {
    const userCount = useSelector(userCountSelector)
    const computerCount = useSelector(computerCountSelector)
    const fieldSize = useSelector(fieldSizeSelector)
    const isGameFinish = useSelector(isGameFinishSelector)
    const userName = useSelector(userNameSelector)
    const dispatch = useDispatch()

     useEffect(() => {
         if(computerCount > (fieldSize * fieldSize /2) || userCount > (fieldSize * fieldSize /2)){
             dispatch(finishGameAction())
         }
     }, [userCount, computerCount])

    return isGameFinish &&
        <Message>
            {userCount > computerCount ? userName : 'Computer'} won!
        </Message>
}

export default Notification



