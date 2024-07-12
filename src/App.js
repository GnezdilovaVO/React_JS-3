import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <div className="App">
      <TodoList />
      <TemperatureConverter />
    </div>
  );
}

export default App;
