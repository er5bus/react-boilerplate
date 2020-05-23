import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

// middleware redux-thunk
import api from "./middleware/api"

// oreducers
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
})

export default ( preloadedState = {} ) => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, api))
  )

  return store
}
