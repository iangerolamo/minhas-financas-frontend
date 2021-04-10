import Rotas from '../main/rotas';
import Navbar from "../components/navbar";

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Rotas />
      </div>
    </>

  );
}

export default App;
