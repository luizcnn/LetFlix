import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);
  // http://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}
      {dadosIniciais.map((categoria, i) => {
        if (i === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[i].videos[i].titulo}
                url={dadosIniciais[i].videos[i].url}
                videoDescription="Elon Musk disserta no TedTalk sobre as perspectivas futuras do mundo com IA Autônoma"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[i]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
