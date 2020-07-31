import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
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
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://letflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (resp) => {
        const resposta = await resp.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        style={{ width: '100%' }}
        onSubmit={(e) => {
          e.preventDefault();

          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(valoresIniciais);
        }}
      >

        <FormField
          value={values.nome}
          type="text"
          name="nome"
          label="Nome da Categoria"
          onChange={handleChange}
        />

        <FormField
          value={values.descricao}
          type="textarea"
          name="descricao"
          label="Descrição"
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="cor"
          label="Cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul style={{ alignSelf: 'start' }}>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
