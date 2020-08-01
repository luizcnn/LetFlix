import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import './Categoria.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://letflix.herokuapp.com/categorias';

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    fetch(URL)
      .then(async (resp) => {
        const resposta = await resp.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  function salvarCategoria() {
    const formData = new FormData(document.getElementById('form'));
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });
    // eslint-disable-next-line no-console
    axios.post(URL, data).catch((e) => console.log(e));
  }

  // function editarCategoria(categoria) {
  //   axios.get(`${URL}/${categoria.id}`).then((resp) => console.log(resp.data));
  // }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        id="form"
        style={{ width: '100%' }}
        onSubmit={(e) => {
          e.preventDefault();

          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(valoresIniciais);
          salvarCategoria();
        }}
      >

        <FormField
          id="form-nome"
          value={values.nome}
          type="text"
          name="nome"
          label="Nome da Categoria"
          onChange={handleChange}
        />

        <FormField
          id="form-descricao"
          value={values.descricao}
          type="textarea"
          name="descricao"
          label="Descrição"
          onChange={handleChange}
        />

        <FormField
          id="form-cor"
          type="color"
          name="cor"
          label="Cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button className="save-button">Salvar</Button>
        <Button className="clean-button">Limpar</Button>

      </form>

      <table className="table">
        <thead>
          <tr>
            <th className="th-categoria">Categoria</th>
            <th className="th-descricao">Descrição</th>
            <th className="th-cor">Cor</th>
            <th className="th-editar">Editar</th>
            <th className="th-remover">Remover</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.nome}>
              <td className="td-nome">{categoria.nome}</td>
              <td className="td-descricao">{categoria.descricao}</td>
              <td className="td-cor">
                <div className="color-table-data" style={{ backgroundColor: categoria.cor }} />
              </td>
              <td className="td-editar">
                <Button className="edit-button">
                  <i className="fa fa-pencil" />
                </Button>
              </td>
              <td className="td-remover">
                <Button className="remove-button">
                  <i className="fa fa-trash" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageDefault>

  );
}

export default CadastroCategoria;
