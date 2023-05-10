
import './App.css'
import Father from './components/containers/Father'
import TaskList from './components/containers/TaskList'
import OptionalRender from './components/pure/OptionalRender'
import LoginFormik from './components/pure/forms/LoginFormik'
import RegisterFormik from './components/pure/forms/RegisterFormik'
import GreetingStyled from './components/pure/greetingStyled'


function App() {


  return (
    <>
		<TaskList />

		{/* <GreetingStyled name='Ivan'/> */}


		 {/* Manejo de eventos
		<Father/>  */}

		{/* Ejemplo de renderizado condicional */}
		{/* <OptionalRender/> */}


		{/* Ejemplo de formulario con Formik
		<LoginFormik/> */}
		<RegisterFormik/>
    </>
  )
}
export default App
