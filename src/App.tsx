import { useEffect, useReducer} from "react"
import Form from "./components/Form"
import { initialState, todoReducer } from "./reducers/reducers"
import TodoItemSection from "./components/TodoItemSection"
import Footer from "./components/Footer"


function App() {

  const [state, dispatch] = useReducer(todoReducer,initialState)

  useEffect(() => {window.localStorage.setItem('items',JSON.stringify(state.items))},[state.items])
  console.log(state)
  return (
    <>
      <main className="max-w-xl my-0 mx-auto">
        <header>
          <h2 className='text-blue-800 font-bold text-4xl text-center m-5' >
            TO-DO APP
          </h2>
        </header>

        <Form 
        dispatch={dispatch}
        />
        {state.items.length === 0 
          ? <h1 className="text-blue-800 font-bold text-2xl text-center my-10 mx-5">Todavia no tienes ninguna actividad...</h1> 
          :<TodoItemSection
            items={state.items}
            dispatch={dispatch}
        />
        }

        <Footer />
      </main>


    </>
  
  )
}
export default App
