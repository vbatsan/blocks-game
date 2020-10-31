import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import moment from "moment";

import Api from '../../service/Api'
import Preloader from '../../shared/Preloader'
import BoardWrapper from "./BoardWrapper";
import Title from "../../shared/Title";


function Board({isGameFinish, userName, userCount, computerCount}) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        if(isGameFinish) {
            const winnerData = {
                winner: userCount > computerCount ? userName : "Computer",
                date: moment(Date.now()).format("llll")
            }
            Api.sendWiner(winnerData)
                .then(() => {
                    Api.getWinners()
                        .then(res => {
                            setData(res)
                            setIsLoading(false)
                        })
                })
        }else {
            Api.getWinners()
                .then(res => {
                    setData(res)
                    setIsLoading(false)
                })
        }

    },[isGameFinish])
    return(
        <BoardWrapper>
            <Title>Leader bord</Title>
            {isLoading && <Preloader/>}
            <ul className='list'>
                {data?.map(item => (
                    <li className='list-item' key={item.id}>
                        <span>{item.winner}</span>
                        <span>{item.date}</span>
                    </li>
                ))}
            </ul>
        </BoardWrapper>
    )
}

const mapStateToProps = state => ({
    isGameFinish: state.app.isGameFinish,
    userName: state.app.userName,
    userCount: state.app.userCount,
    computerCount: state.app.computerCount
})

export default connect(mapStateToProps)(Board)