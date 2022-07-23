import { compose, createStore } from 'redux'
import { sayHiOnDispatch } from './exampleAddons/enhancers'
import rootReducer from './reducer'

const devToolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const sayHiEnhancer = sayHiOnDispatch

const composedEnhancer = compose(devToolsEnhancer, sayHiEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
