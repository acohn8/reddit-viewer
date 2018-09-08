import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import { reducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { StoreState } from './types';

const middleware = applyMiddleware(ReduxThunk);
const store: Store<StoreState> = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
