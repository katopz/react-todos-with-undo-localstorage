const nextId = (state = 0, action) => {
  switch (action.type) {
    case 'GET_NEXT_ID':
      return ++action.nextId
    default:
      return state
  }
}

export default nextId
