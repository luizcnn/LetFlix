import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

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
            [key]: value
        });
    };

    function handleChange(event) {
        
        setValue(
            event.target.getAttribute('name'), 
            event.target.value
        );
    };

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={(e) => {
                e.preventDefault()
            
                setCategorias([
                    ...categorias,
                    values
                    ]);

                setValues(valoresIniciais)
                
            }}>

                <FormField 
                    value={values.nome}
                    type="text"
                    name="nome"
                    label="Nome da Categoria:"
                    onChange={handleChange}
                />

                <FormField
                    value={values.descricao}
                    type="textArea"
                    name="descricao"
                    label="Descrição:"
                    onChange={handleChange}
                />

                <FormField
                    type = "color"
                    name="cor"
                    label="Cor:"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                    <li key={`${categoria}:${index}`}>{categoria.nome}</li>
                    );
                })}
            </ul>
            
            <Link to ="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
};

export default CadastroCategoria;