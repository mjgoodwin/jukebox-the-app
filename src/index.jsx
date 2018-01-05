import React from 'react';
import ReactDOM from 'react-dom';

// main app
import AppContainer from 'containers/AppContainer';
import { Provider } from 'react-redux';
import store from '../store';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('.jukebox-app'),
);
