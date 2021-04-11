import Apiservice from "../apiservice";

class UsuarioService extends Apiservice{
  constructor() {
    super('/api/usuarios');
  }
}

export default UsuarioService;
