import Counter from './components/Counter';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import ApiFetch from './components/ApiFetch';
import ReusableButton from './components/ReusableButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>React Week-1 Examples</h1>
      <Counter />
      <InputForm />
      <TodoList />
      <ApiFetch />
      <div className="reusable-example">
        <h2>Component Reuse Example</h2>
        <ReusableButton label="Click Me!" onClick={() => alert('Button clicked!')} color="green" />
        <ReusableButton label="Another Button" onClick={() => alert('Another button clicked!')} color="red" />
      </div>
    </div>
  );
}

export default App;
