import React from 'react';
import PageDefault from '../../components/PageDefault'
import './Estilo.css'
import Barreira from './components/Barreira';

function Pagina404(){
    return(
        <PageDefault>
            <h1>Página 404 (Em Construção)</h1>
            <div className="areaDoJogo">
                <div className="par-de-barreiras">
                    <Barreira reverse={true}/>
                    <Barreira reverse={false} />
                </div>
            </div>
        </PageDefault>
    );
};

export default Pagina404;