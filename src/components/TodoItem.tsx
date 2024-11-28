import { actionsTodo } from "../reducers/reducers"
import { TodoItemT } from "../Types"

type TodoItemProps = {
    e: TodoItemT,
    dispatch: React.Dispatch<actionsTodo>
}

const TodoItem = ({e, dispatch}:TodoItemProps) => {
    
  return (
    <>
        <form action="" className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-md my-4 px-10 py-4 mx-3">
            <input type="checkbox" className="mr-2"/>
            <h2 className="text-lg font-semibold text-blue-800">{e.name}</h2>
            <figure 
            onClick={() => dispatch( {type: 'deleteItem', payload: {id: e.id}} )}
            className="cursor-pointer"
            >
                <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
            </figure>
        </form>
    </>
  )
}

export default TodoItem