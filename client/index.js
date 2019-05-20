import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'

import history from './history'
import store from './store'
import App from './AppContainer'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)


/*
for a connected/redux container
<Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
</Provider>,

*/
