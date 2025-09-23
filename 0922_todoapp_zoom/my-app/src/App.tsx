import { nanoid } from "nanoid";
import { useRef, useState } from "react"
import './App.css';

type Todo = { key: string; isChecked: boolean; content: string, isDeleted: boolean; };

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { key: nanoid(), isChecked: false, content: '밥 먹기', isDeleted: false, },
    { key: nanoid(), isChecked: false, content: '공부하기', isDeleted: false }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const add = (content: string) => {
    setTodos((prev) => [...prev, { key: nanoid(), isChecked: false, content, isDeleted: false }]);
  };

  const onCreate = () => {
    if (!inputRef.current || !inputRef.current.value) {
      return;
    }

    add(inputRef.current.value);
    inputRef.current.value = '';
  }

  const createCheckHandler = (key: string, isChecked: boolean) => {
    return () => {
      setTodos((prev) => {
        for (const index in prev) {
          if (prev[index].key === key) {
            prev[index].isChecked = !isChecked;
          }
        }

        return [...prev];
      });
    };
  };

  const remove = () => {
    setTodos((prev) => {
        for (const index in prev) {
          if (prev[index].isChecked) {
            prev[index].isDeleted = true;
          }
        }

        return [...prev];
    })
  };

  const onRemove = () => {
    return remove();
  };

  return (
    <>
      <div className="c">
      <h1>Todo List</h1>
      <input ref={inputRef} />
      <button onClick={onCreate}>생성</button>
      
            <button onClick={onRemove}>삭제</button>
      {todos.filter((todo) => !todo.isDeleted).map((todo) => {
        return (
          <div key={todo.key}>
            <input type="checkbox" checked={todo.isChecked} onClick={createCheckHandler(todo.key, todo.isChecked)} />
            {todo.content}
          </div>
        );
      })}
        </div>
    </>
  )
}

export default App
