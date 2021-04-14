import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from "../components/card";
import FormGroup from "../components/form-group";

function ConsultaLancamentos() {
    return (
        <Card title={"Consulta Lançamentos"}>
          <div className={"row"}>
            <div className={"col-md-12"}>
              <div className={"bs-component"}>
                <FormGroup htmlFor={"inputAno"} label={"Ano: *"}>
                  <input type={"text"}
                         className={"form-control"}
                         id={"inputAno"}
                         aria-describedby={"emailHelp"}
                         placeholder={"Digite o Ano"} />

                </FormGroup>

              </div>
            </div>
          </div>

        </Card>
    );
}

export default ConsultaLancamentos;
