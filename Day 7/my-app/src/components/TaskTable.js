import React from 'react';

export default function TaskTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
            <th>Delete Task</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.tasks.map((task) => {
            return (
              <tr key={task.title}>
                <td>{task.title}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => props.onBookDelete(book)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}