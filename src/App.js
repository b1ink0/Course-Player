import "./App.scss";
import Dashboard from "./components/Dashboard";
import { StateProvider } from "./context/StateContext";

function App() {
  return (
    <StateProvider>
      <Dashboard />
    </StateProvider>
  );
}

export default App;
