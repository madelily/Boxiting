import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

// Todo 타입에 isChecked 속성 추가
type Todo = { key: string; content: string; isChecked: boolean };

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { key: '1', content: '밥먹기', isChecked: false },
    { key: '2', content: '룰루', isChecked: true },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const add = (content: string) => {
    setTodos((prev) => [...prev, { key: nanoid(), content, isChecked: false }]);
  };

  // onCreate 함수 정의
  const onCreate = () => {
    if (inputRef.current) {
      add(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  // createCheckHandler 함수를 올바르게 수정
  const createCheckHandler = (key: string) => {
    return () => {
      setTodos((prev) => {
        // map을 사용하여 불변성 유지하며 새 배열 반환
        return prev.map(todo => 
            todo.key === key ? { ...todo, isChecked: !todo.isChecked } : todo
        );
      });
    };
  };

const remove = (key: string) => {
  setTodos((prev) => prev.filter((todo) => todo.key !== key));
};
const complete = (key: string) => {
  setTodos((prev) =>
    prev.map((todo) =>
      todo.key === key ? { ...todo, isChecked: !todo.isChecked } : todo
    )
  );
};

  return (
    <>
      <h1>Todo List</h1>
      <input ref={inputRef} />
      <button onClick={onCreate}>생성</button>
      <button onClick={() => onRemove(todo.key)}>삭제</button>
      {todos.map((todo) => (
        <div key={todo.key}>
          <input
            type="checkbox"
            checked={todo.isChecked}
            onChange={createCheckHandler(todo.key)}
          />
          {todo.content}
        </div>
      ))}
    </>
  );
}

export default App;