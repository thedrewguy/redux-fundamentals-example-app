import { createStore } from 'redux'
import rootReducer from './reducer'

// enhancers
const devToolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, undefined, devToolsEnhancer)

export default store
