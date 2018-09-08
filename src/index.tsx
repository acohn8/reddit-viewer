import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';

import App from './app/App';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(ReduxThunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
