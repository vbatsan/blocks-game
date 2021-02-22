import React, {useState, useEffect, useRef, useCallback} from 'react'
import {useDispatch} from 'react-redux';

import Select from "./Select";
import {startGameAction, clearFieldAction, newGameAction} from "../../store/reducers/app/actions";
import Input from "./Input";
import Button from "./Button";
import Api from "../../service/Api";
import FlexWrapper from "../../shared/FlexWrapper";

function Controls({changeField}) {
    const [settings, setSettings] = useState({})
    const [isNewUser, setIsNewUser] = useState(true)
    const [name, setName] = useState('')
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()
    const selectRef = useRef()
    const clearField = useCallback(() => dispatch(clearFieldAction()),[dispatch])

    useEffect(() => {
        Api.getSettings()
            .then((res => setSettings(res)))
    },[])

    function handleButton() {
        if(name.length < 1) {
            setIsError(true)
            return
        }
        if(selectRef.current.value === '' ) {
            selectRef.current.style.border = '1px solid red'
            return;
        }
        clearField()
        dispatch(startGameAction(name))
        setIsNewUser(false)

    }

    function handleInputChange(value) {
        setName(value);
        setIsError(false)
        if(value !== name) setIsNewUser(true)
    }

    return (
        <>
        <FlexWrapper justify={'center'}>
            <Select
                ref={selectRef}
                defaultValue={''}
                onChange={(event) => {
                    newGameAction()
                    selectRef.current.style.border = '1px solid black'
                    changeField(settings[event.target.value])
                    clearField()
                }}
            >
                <option disabled value={''}>Choose level</option>
                {Object.keys(settings).map(item => <option key={item} value={item}>{item.toUpperCase()}</option>)}
            </Select>
            <Input
                isError={isError}
                placeholder={'Your name'}
                value={name}
                onChange={event => handleInputChange(event.target.value) }
            />
            <Button  onClick={() => handleButton()}>{isNewUser ? 'Play' : 'Play again'}</Button>
        </FlexWrapper>
    </>
    )
}

export default Controls