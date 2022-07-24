const initialFilters = {
  status: 'Active',
  colors: ['red', 'blue'],
}

export default function filtersReducer(state = initialFilters, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      console.log('status filter changed')
      console.log(action.payload)
      return {
        ...state,
        status: action.payload,
      }
    }
    case 'filters/colorFilterChanged': {
      switch (action.payload.changeType) {
        case 'added':
          return {
            ...state,
            colors: [...state.colors, action.payload.color],
          }
        default:
          return state
      }
    }
    default:
      return state
  }
}
