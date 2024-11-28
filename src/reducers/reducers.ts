import { TodoItemT } from "../Types"

export type actionsTodo = 
{type: 'saveItem', payload: {newItem:TodoItemT}} |
{type: 'deleteItem', payload: {id: TodoItemT['id']}} 

export type stateTodo = {
    items: TodoItemT[]
}

const LocalStorageItems = () => {
    const items = localStorage.getItem('items')
    return items ? JSON.parse(items) : []
}

export const initialState = {
    items: LocalStorageItems()
}

export const todoReducer = (
    state: stateTodo = initialState,
    action: actionsTodo
) => {
    if(action.type === 'saveItem'){
        return {
            ...state,
            items: [...state.items, action.payload.newItem]
        }
    }

    if(action.type === 'deleteItem'){
        return {
            ...state,
            items: state.items.filter((e) => e.id !== action.payload.id)
        }
    }

    return state
}