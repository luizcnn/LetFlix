import React from 'react';
import PageDefault from '../../components/PageDefault';
import gif404 from '../../assets/img/7VE.gif';
import './Estilo.css';

function Pagina404() {
  return (
    <PageDefault>
      <div className="body404">
        <h1 className="title">Desculpe, não encontramos o que você está procurando =(</h1>
        <div>
          <img src={gif404} alt="Not Found" />
        </div>
      </div>
    </PageDefault>
  );
}

export default Pagina404;
