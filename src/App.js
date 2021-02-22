import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Field from "./components/Field";
import Container from './shared/Container'
import Controls from "./components/Controls";
import {setSettingsAction} from "./store/reducers/app/actions";
import Notification from "./components/Notification";
import Board from "./components/Board";
import FlexWrapper from "./shared/FlexWrapper";
import {settingsSelector} from "./store/reducers/app/selectors";

function App() {
    const settings = useSelector(settingsSelector)
    const dispatch = useDispatch()
    const setSettings = useCallback((payload) => dispatch(setSettingsAction(payload)), [dispatch])
  return (
          <Container>
              <div className={'main-wrapper'}>
                  <FlexWrapper fustify={'center'} direction={'column'} align={'center'} flex={1}>
                      <Controls changeField={setSettings}/>
                      <Notification/>
                  </FlexWrapper>
                  <FlexWrapper justify={'space-around'}>
                  {settings && <Field settings={settings}/> }
                      <Board/>
                  </FlexWrapper>
              </div>

          </Container>
  );
}

export default App
