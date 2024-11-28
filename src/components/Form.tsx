import { Dispatch, useState } from "react"
import { actionsTodo } from "../reducers/reducers"
import {v4 as uuidv4} from 'uuid'

type FormProps = {
    dispatch: Dispatch<actionsTodo>
}

const Form = ({dispatch}:FormProps) => {

    
    const initialState = {
        id:uuidv4(),
        name:'',
        category: 1
    }
    const [stateForm, setStateForm] = useState(initialState)
    const [sent, setSent] = useState(false)
    

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const numberIsField = ['category'].includes(e.target.id)
        setStateForm({
            ...stateForm,
            [e.target.id] : numberIsField ? +e.target.value : e.target.value,
        })
    }

    const handleDisabled = () => {
        return stateForm.name.trim() === ''
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: 'saveItem', payload: {newItem: stateForm}})
        setSent(true)
        setTimeout(() => {setSent(false)},2500)
        setStateForm(initialState)
    
    }
  return (
    <>
        <section className="w-11/12 flex justify-between text-center flex-col bg-slate-100 shadow-md rounded-xl p-5 mx-auto">
            <form 
            action=""
            className="flex justify-center flex-col"
            onSubmit={handleSubmit}
             >
                <label htmlFor="input-text" className="text-blue-800 text-lg font-bold mb-2" >Ingresa una actividad!</label>
                <input 
                    id="name"
                    type="text" 
                    placeholder="Estudiar 25 min, Sacar la basura, Correr 1 hr... " 
                    className="rounded-md w-full h-10 px-4 mb-2"
                    value={stateForm.name}
                    onChange={handleChange}
                />
                <select  
                id="category" 
                onChange={handleChange}
                className="text-black px-4 h-10"
                
                >
                    <option value="1">Hoy</option>
                    <option value="2">Mañana</option>
                    <option value="3">Proximamente...</option>
                </select>
                <button
                className="py-2 px-5 mt-2 bg-blue-800 rounded-lg text-white disabled:opacity-10"
                type="submit"
                disabled={handleDisabled()}
                >Agregar</button>
                {sent ? <p className="text-xl font-bold mt-4 text-blue-800">Actividad agregada:) </p>: <p className="hidden">Actividad agregada </p> }
                
            </form>
        </section>
    </>
  )
}

export default Form