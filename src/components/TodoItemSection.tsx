import { useState } from "react"
import { TodoItemT } from "../Types"
import TodoItem from "./TodoItem"
import { actionsTodo } from "../reducers/reducers"

type TodoItemProps = {
  items: TodoItemT[],
  dispatch: React.Dispatch<actionsTodo>
}
const TodoItemSection = ({items, dispatch}:TodoItemProps) => {

  const [todoItemState, setTodoItemState] = useState(1)

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setTodoItemState(+e.target.value)
  }

  const todayTodos = items.filter(item => item.category === 1)
  const tomorrowTodos = items.filter(item => item.category === 2)
  const soonTodos = items.filter(item => item.category === 3)
  return (
    <>
    <select name="" id="" className="my-5 ml-5 h-10 px-2" onChange={handleChange}>
            <option value="1">Hoy</option>
            <option value="2">Mañana</option>
            <option value="3">Pronto...</option>
            <option value="4">Todos los todos</option>
    </select> 

    {todoItemState === 4 && items.map( (e) => (
      <TodoItem
      dispatch={dispatch}
      key={e.id}
       e={e}
      />
    ))} 
    {todoItemState === 1 && todayTodos.map( (e) => (
      <TodoItem
      dispatch={dispatch}
      key={e.id}
      e={e}
     />
    ))}
     {todoItemState === 2 && tomorrowTodos.map( (e) => (
      <TodoItem
      dispatch={dispatch}
      key={e.id}
      e={e}
     />
    ))}
     {todoItemState === 3 && soonTodos.map( (e) => (
      <TodoItem
      dispatch={dispatch}
      key={e.id}
      e={e}
     />
    ))}

    
    
    </>
  )
}

export default TodoItemSection