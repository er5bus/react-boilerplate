import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import * as Sentry from '@sentry/browser'

// load style
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assets/scss/main.scss"

// store
import configureStore from "./configureStore"


import { SENTRY_DSN } from './constants'
//import routes from "./routes"

// load translation
import './i18n'

const store = configureStore()

Sentry.init({
  release: 'app@1.0.0',
  dsn: SENTRY_DSN,
})

const Demo = () => <h1> Hello React</h1>

// Init the session service
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Demo} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
