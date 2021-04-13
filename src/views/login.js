import { useState } from 'react';

import UsuarioService from "../app/service/usuarioService";

import Card from '../components/card';
import FormGroup from '../components/form-group';
import { useHistory } from 'react-router-dom';
import LocalstorageService from "../app/service/localstorageService";
import { mensagemErro} from '../components/toastr';

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const service = new UsuarioService();

  function entrar() {
    service.autenticar({
      email: email,
      senha: senha
    }).then(response => {
      LocalstorageService.adicionarItem('_usuario_logado', response.data)
      history.push("/home")
    }).catch(erro => {
      mensagemErro(erro.response.data)
    });
  }

  return (
    <div className="row">
      <div className="col-md-6" style={ {position : 'relative', left: '300px'} }>
        <div className="bs-docs-section">
          <Card title="Login">
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                  <fieldset>
                    <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                      <input
                        type="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Digite o Email"
                      />
                    </FormGroup>
                    <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                      <input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <button onClick={entrar} className="btn btn-success">Entrar</button>
                    <button onClick={() => history.push("/cadastro-usuarios")} className="btn btn-danger">Cadastrar</button>
                  </fieldset>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
