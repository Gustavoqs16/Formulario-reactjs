import { Header } from "./components/Header/Header";
import  FormUser from "./components/Form/FormUser";
import "./App.css";
import CardDescription from "./components/CardDescription/CardDescription";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="container">
          <FormUser />
        </div>
      </div>
    </div>
  );
}

export default App;
