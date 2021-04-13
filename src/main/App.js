import Rotas from '../main/rotas';
import Navbar from "../components/navbar";

import 'toastr/build/toastr.min';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css';
import 'toastr/build/toastr.css';

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
