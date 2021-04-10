import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../components/card';
import FormGroup from '../components/form-group';


function CadastroUsuario() {
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");

  function cadastrar() {
    console.log("Email: ", {nome})
    console.log("Email: ", {email})
    console.log("Senha: " ,{senha})
    console.log("Senha: " ,{senhaRepeticao})
  }

  return(
    <Card title="Cadastro de Usuário">
    <div className="row">
      <div className="col-lg-12">
        <div className="bs-component">
          <FormGroup label="Nome: *" htmlFor="inputNome">
            <input
              type="text"
              value={nome}
              id="inputNome"
              className="form-control"
              name="nome"
              onChange={e => setNome(e.target.value)} />
          </FormGroup>
          <FormGroup label="Email: *" htmlFor="inputEmail">
            <input
              type="email"
              value={email}
              id="inputEmail"
              className="form-control"
              name="email"
              onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup label="Senha: *" htmlFor="inputSenha">
            <input
              type="password"
              value={senha}
              id="inputSenha"
              className="form-control"
              name="senha"
              onChange={e => setSenha(e.target.value)} />
          </FormGroup>
          <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
            <input
              type="password"
              value={senhaRepeticao}
              id="inputRepitaSenha"
              className="form-control"
              name="senha"
              onChange={e => setSenhaRepeticao(e.target.value)} />
          </FormGroup>
          <button onClick={cadastrar} type="button" className="btn btn-success">Salvar</button>
          <button onClick={() => history.push("/login")} type="button" className="btn btn-danger">Cancelar</button>
        </div>

      </div>
    </div>
    </Card>
  )
}

export default CadastroUsuario;
