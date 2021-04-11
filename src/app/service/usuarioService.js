import Apiservice from "../apiservice";

class UsuarioService extends Apiservice{

  constructor() {
    super('/api/usuarios');
  }

  autenticar(credenciais){
    return this.post('/autenticar', credenciais)
  }

}

export default UsuarioService;
