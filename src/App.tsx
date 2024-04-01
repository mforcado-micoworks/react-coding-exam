import "./App.css";
import { TodoList } from "./components";
import { TodoForm } from "./forms";

function App() {
  return (
    <main className="mx-auto container py-3">
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default App;
