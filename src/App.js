import React from 'react';
import {connect} from 'react-redux';

import Field from "./components/Field";
import Container from './shared/Container'
import Controls from "./components/Controls";
import {setSettingsAction} from "./store/reducers/app/actions";
import Notification from "./components/Notification";
import Board from "./components/Board";
import FlexWrapper from "./shared/FlexWrapper";

function App({settings, setSettingsAction}) {

  return (
          <Container>
              <div className={'main-wrapper'}>
                  <FlexWrapper fustify={'center'} direction={'column'} align={'center'} flex={1}>
                      <Controls changeField={setSettingsAction}/>
                      <Notification/>
                      {settings && <Field settings={settings}/> }
                  </FlexWrapper>
                  <FlexWrapper justify={'center'} flex={1}>
                      <Board/>
                  </FlexWrapper>
              </div>

          </Container>


  );
}

const mapStateToProps = state => ({
    settings: state.app.settings,
})

export default connect(mapStateToProps, {setSettingsAction})(App);
