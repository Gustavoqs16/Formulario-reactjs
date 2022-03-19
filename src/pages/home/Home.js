import { Header } from "../../components/header/Header";
import FormUser from "../form/FormUser";
import "./Home.css";


/* Realizar mudanca de componentes enviando Header e FormUser para outra page */

function Home() {
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

export default Home;
