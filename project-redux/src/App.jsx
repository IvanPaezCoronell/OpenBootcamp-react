import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions'

function App() {
	return (
    <div>
      
      <TodoFormContainer />
      <div className='w-full max-w-sm bg-black  border-gray-200 rounded-lg shadow text-color-green'>
      <TodosContainer />
    </div>
      <FilterOptions />


    </div>
    
  )
}

export default App;
