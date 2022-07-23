export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const antiGreenMiddleware = function (storeAPI) {
  return function wrapDispatch(next) {
    console.log('AGM - Wrapping dispatch - happens once')
    return function handleAction(action) {
      console.log('AGM - handling action')
      if (
        action.action.type === 'filters/colorFilterChanged' &&
        action.action.payload.color === 'green'
      ) {
        console.log('AGM - no green allowed. The buck stops here')
        return
      } else {
        console.log('AGM - action allowed')
        return next(action)
      }
    }
  }
}
