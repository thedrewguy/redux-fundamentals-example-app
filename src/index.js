import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'

import store from './store'

console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn React' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn Redux' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Build Stuff' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })

store.dispatch({ type: 'todos/todoToggled', payload: 1 })

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Completed' })

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { changeType: 'added', color: 'green' },
})

unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
