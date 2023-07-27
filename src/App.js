import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App m-5">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
