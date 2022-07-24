import React from 'react'

const RemainingTodos = ({ count }) => {
  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{count !== '1' ? 's' : ''} left
    </div>
  )
}

const StatusFilter = ({ selectedStatus }) => {
  const statuses = ['All', 'Active', 'Completed']

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>
        {statuses.map((status) => {
          return (
            <li key={status}>
              <button className={status === selectedStatus ? 'selected' : ''}>
                {status}
              </button>
            </li>
          )
        })}
        <li key="all"></li>
      </ul>
    </div>
  )
}

const ColorFilter = ({ selectedColors }) => {
  const availableColors = ['Green', 'Blue', 'Orange', 'Purple', 'Red']

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">
        {availableColors.map((c) => {
          return (
            <label key={c}>
              <input type="checkbox" name={c} checked="false" />
              <span
                className="color-block"
                style={{ backgroundColor: c }}
              ></span>
              {c}
            </label>
          )
        })}
      </form>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>
      <RemainingTodos count="1" />
      <StatusFilter selectedStatus="All" />
      <ColorFilter selectedColors={[]} />
    </footer>
  )
}

export default Footer
