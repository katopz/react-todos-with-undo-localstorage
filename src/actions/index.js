export const addTodo = (nextId, text) => ({
  type: 'ADD_TODO',
  id: nextId,
  text
})

export const getNextId = (nextId) => ({
  type: 'GET_NEXT_ID',
  nextId
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
