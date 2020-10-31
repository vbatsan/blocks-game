import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Message from "./Message";
import {finishGameAction} from "../../store/reducers/app/actions";

function Notification({user, computer, fieldSize, finishGameAction, isGameFinish, userName}) {

     useEffect(() => {
         if(computer > (fieldSize * fieldSize /2) || user > (fieldSize * fieldSize /2)){
             finishGameAction()
         }
     }, [user, computer])

    return isGameFinish &&
        <Message>
            {user > computer ? userName : 'Computer'} won!
        </Message>
}

const mapStateToProps = state => ({
    user: state.app.userCount,
    computer: state.app.computerCount,
    fieldSize: state.app.settings.field,
    isGameFinish: state.app.isGameFinish,
    userName: state.app.userName
})

export default connect(mapStateToProps, {finishGameAction})(Notification)



