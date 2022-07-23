import { applyMiddleware, compose, createStore } from 'redux'
import { sayHiOnDispatch } from './exampleAddons/enhancers'
import { antiGreenMiddleware, print1 } from './exampleAddons/middleware'
import rootReducer from './reducer'

// enhancers
const devToolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const sayHiEnhancer = sayHiOnDispatch

const mwEnhancer = applyMiddleware(antiGreenMiddleware, print1)

const composedEnhancer = compose(devToolsEnhancer, sayHiEnhancer, mwEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
