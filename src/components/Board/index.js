import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import moment from "moment";

import Api from '../../service/Api'
import Preloader from '../../shared/Preloader'
import BoardWrapper from "./BoardWrapper";
import Title from "../../shared/Title";
import {
    computerCountSelector,
    isGameFinishSelector,
    userCountSelector,
    userNameSelector
} from "../../store/reducers/app/selectors";


function Board() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const isGameFinish = useSelector(isGameFinishSelector)
    const userCount = useSelector(userCountSelector)
    const computerCount = useSelector(computerCountSelector)
    const userName = useSelector(userNameSelector)

    useEffect(() => {
        setIsLoading(true)
        if(isGameFinish) {
            const winnerData = {
                winner: userCount > computerCount ? userName : "Computer",
                date: moment(Date.now()).format("llll")
            }
            Api.sendWinner(winnerData)
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

export default Board