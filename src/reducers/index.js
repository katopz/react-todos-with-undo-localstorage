import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import nextId from './nextId'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  nextId
})

export default todoApp
