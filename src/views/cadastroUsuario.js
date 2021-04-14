import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro} from '../components/toastr';

import UsuarioService from "../app/service/usuarioService";


function CadastroUsuario() {
  const usuarioService = new UsuarioService();
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");

  function validar() {
    const msgs = []

    if (!nome) {
      msgs.push("O campo Nome é obrigatório.")
    }

    if (!email) {
      msgs.push("O campo Email é obrigatório.")
    } else if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      msgs.push("Informe um Email válido")
    }

    if (!senha || !senhaRepeticao) {
      msgs.push("Digite a senha 2x.")
    } else if (senha !== senhaRepeticao) {
      msgs.push("As senhas não batem.")
    }


    return msgs;
  }

  function cadastrar() {

    const msgs = validar();

    if (msgs && msgs.length > 0) {
      msgs.forEach((msg, index) => {
        mensagemErro(msg)
      });
      return false;
    }

    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
    usuarioService.salvar(usuario)
        .then(response => {
          mensagemSucesso("Usuário cadastrado com sucesso!Faça o login para acessar o sistema.")
          history.push("/login")
        }).catch(error => {
          mensagemErro(error.response.data)
    })
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
