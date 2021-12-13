import { Header } from "./components/header/Header";
import  FormUser from "./components/form/FormUser"

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="container">
          <FormUser />
        </div>
      </div>
    </div>
  );
}

export default App;
