import React, { useState, useEffect } from "react";
import "./App.css";
import Lists from './components/Lists';
import Form from './components/Form';

export default function App() {
  const [todoData, setTodoData] = useState(() => {
    const savedData = localStorage.getItem("todoData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#000",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    const updatedData = [...todoData, newTodo];
    setTodoData(updatedData);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  // 💡 todoData가 변경될 때마다 로컬 스토리지에 저장합니다.
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <div className="container">
      <div className="todoBlack">
        <div className="title">
          <h1>할일 목록</h1>
        </div>

        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          btnStyle={btnStyle}
        />

        <Form
          handleSubmit={handleSubmit}
          value={value}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}