import './App.css';
import Todo from "../components/Todo";
import GlobalContext from "../context/GlobalContext";

function App() {
    return (
        <GlobalContext>
            <Todo/>
        </GlobalContext>
    );
}

export default App;
