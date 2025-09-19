import React, { useState } from "react";

export default function List({ title, completed, id, todoData, setTodoData, btnStyle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });
    setTodoData(newTodoData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div style={listStyle(completed)}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
            autoFocus
          />
          <button style={btnStyle}  type="submit">저장</button>
          <button style={btnStyle}  onClick={() => setIsEditing(false)}>취소</button>
        </form>
      </div>
    );
  } else {
    return (
      <form style={listStyle(completed)}>
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompleChange(id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={() => handleClick(id)}>
            x
          </button>
          <button style={btnStyle} onClick={() => setIsEditing(true)}>edit</button>
        </p>
      </form>
    );
  }
}