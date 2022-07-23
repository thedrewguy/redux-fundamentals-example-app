function nextTodoId(todos) {
  return todos[0] ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
}

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      console.log('added')
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ]
    }
    case 'todos/todoToggled': {
      console.log('toggled')

      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    }
    default:
      return state
  }
}
