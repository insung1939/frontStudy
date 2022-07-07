import './TodoTemplate.scss'
import { useCallback, useRef, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import {Todo} from "../type"

const TodoTemplate = ( ) =>{
    const [todos, setTodos] = useState<Todo[]>([
    ])
    const nextId = useRef(1)
    const onInsert = useCallback((text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      setTodos(todos.concat(todo))
      nextId.current += 1
    }, [todos])
  
    const onRemove = useCallback((id: number) => {
      setTodos(todos.filter(todo => todo.id !== id))
    }, [todos])
  
    const onToggle = useCallback(
      (id: number) => {
        setTodos(
          todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        )
      }, [todos]
    )
    return (
        <div className='TodoTemplate'>
            <div className='app-title'>일정관리</div>
            <div className='content'>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </div>
        </div>
    )
}

export default TodoTemplate

//any 도 됨