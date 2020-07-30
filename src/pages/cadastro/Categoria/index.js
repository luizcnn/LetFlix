import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import './Categoria.css'

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

            <form 
                className="form"
                onSubmit={(e) => {
                e.preventDefault()
            
                setCategorias([
                    ...categorias,
                    values
                    ]);

                setValues(valoresIniciais)
                
            }}>

                <FormField
                    className="field-nome" 
                    value={values.nome}
                    type="text"
                    name="nome"
                    label="Nome da Categoria:"
                    placeholder="Nome"
                    onChange={handleChange}
                />

                <FormField
                    className="field-descricao"
                    value={values.descricao}
                    type="textArea"
                    name="descricao"
                    placeholder="Descrição"
                    label="Descrição:"
                    onChange={handleChange}
                />

                <FormField
                    className="field-cor"
                    type = "color"
                    name="cor"
                    placeholder="Cor"
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