import React from 'react'
import { connect } from 'react-redux'
import { getNextId, addTodo } from '../actions'

const mapStateToProps = (state) => ({
  nextId: state.nextId
})

let AddTodo = ({ dispatch, nextId }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(getNextId(nextId))
        dispatch(addTodo(nextId, input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect(
  mapStateToProps
)(AddTodo)

export default AddTodo
