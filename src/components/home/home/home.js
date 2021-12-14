import React from 'react';
import './home.css';

function Home() {
  return (
    <><><><><><><><><div className="HomePage">
      <header className="HomeHeader" id='inicio'>
        
          <div className="h1">
            <p>MINHAS 8 EMOÇÕES</p>
          </div>
          <div className="descricaoInicial">
            <p>Esta é uma página que revela minhas principais emoções...</p>
          </div>

        <div className="botoes">
        <a href="#pag-alegria"><button className='bnt-alegria'>ALEGRIA</button></a>
        <a href="#pag-tristeza"><button className='bnt-tristeza'>TRISTEZA</button></a>
        <a href="#pag-raiva"><button className='bnt-raiva'>RAIVA</button></a>
        <a href="#pag-nojo"><button className='bnt-nojo'>NOJO</button></a>
        <a href="#pag-medo"><button className='bnt-medo'>MEDO</button></a>
        <a href="#pag-empatia"><button className='bnt-empatia'>EMPATIA</button></a>
        <a href="#pag-romance"><button className='bnt-romance'>ROMANCE</button></a>
        <a href="#pag-nostalgia"><button className='bnt-nostalgia'>NOSTALGIA</button></a>
      </div>
      </header>
      
    </div>

    
      <div className="title-alegria" id='pag-alegria'>
          <div className="texto">
            <div>
              <a href="#inicio"><p className='voltar'>início</p></a>
            </div>
            <h2>Alegria</h2>
            <p className="p-texto">Considerada a emoção mais sentida positivamente, ela é capaz de expandir o ego e contagiar a todos os que estiverem mais próximo. Ela pode ser vivenciada ao desfrutar de bons momentos da vida com prazer.</p>
            <p>Fico alegre quando: </p>
            <ul>
              <li>Vejo outra pessoa feliz</li>
              <li>Passo um tempo com as pessoas que amo</li>
              <li>Ganho presentes</li>
              <li>Atinjo um objetivo</li>
            </ul>
          </div>
          <img src="medias/img-alegria.png" width="300px" alt=""/>
      </div></>

      <div className="title-tristeza" id='pag-tristeza'> 
        <div>
          <a href="#inicio"><p className='voltar2'>início</p></a>
        </div>       
        <img className='img2' src="medias/img-tristeza.png" width="300px" alt=""/>

        <div className="texto"> 
          <h2>Tristeza</h2>
            <p className="p-texto">O contrário da alegria, a tristeza é uma das emoções mais negativas que podem ser sentidas pelas pessoas. Ou seja, tem a função de comunicar situações ruins e desagradáveis que estão sendo vividas. Esse sentimento também costuma estar associado a eventos difíceis.</p>
            <p>Momentos que me deixaram triste:</p>
            <ul>
              <li>Quando alguém estava triste</li>
              <li>Quando alguém da minha família foi embora para sempre</li>
              <li>Quando não atingi a nota que esperava em uma prova</li>
              <li>Quado perdi um objeto importante</li>
            </ul>
          </div>
      </div></>

      <div className="title-raiva" id='pag-raiva'>       
          <div className="texto">
            <div>
              <a href="#inicio"><p className='voltar'>início</p></a>
            </div>
            <h2>Raiva</h2>
            <p className="p-texto">O sentimento de raiva é a emoção que expressa o ódio, assim como outros sentimentos ruins, desagradáveis e negativos. Pois, ela pode estar associada à irritabilidade, ao mau humor, ao mal estar, ao desgosto, a frustração, a contrariedade, a perdas, entre outros.</p>
            <p>Momentos em que sinto raiva:</p>
            <ul>
              <li>Quando pegam algo meu sem pedir</li>
              <li>Quando falam muito alto</li> 
              <li>Quando me atraso</li>
              <li>Mosquito zunindo na minha orelha a noite</li>
            </ul>
          </div>
          <img src="medias/img-raiva.png" width="300px" alt=""/>
      </div></>

      <div className="title-nojo" id='pag-nojo'>  
        <div>
          <a href="#inicio"><p className='voltar2'>início</p></a>
        </div>     
          <img className='img2' src="medias/img-nojo.png" width="300px" alt=""/>
          <div className="texto">
            <h2>Nojo</h2>
            <p className="p-texto">O nojo gera a repulsa ou a necessidade de rejeitar algo, criando uma sensação de desagrado nítida. A principal função do nojo é evitar qualquer tipo de estímulo que possa provocar uma intoxicação. O nojo também está associado a um caráter mais social, como por exemplo, por meio da rejeição de estímulos sociais, situações ou pessoas tóxicas.</p>
            <p>Coisas que sinto nojo:</p>
            <ul>
              <li>Cheiro de comida podre</li>
              <li>Vômito</li>
              <li>Necessidades fisiológicas da minha cadelinha</li>
              <li>Pessoas preconceituosas</li>
            </ul>
          </div>
      </div></>
      

      <div className="title-medo" id='pag-medo'>
          <div className="texto">
            <div>
              <a href="#inicio"><p className='voltar'>início</p></a>
            </div>
            <h2>Medo</h2>
            <p className="p-texto">O medo se caracteriza como um impulso negativo, que pode impedir qualquer ação que possa colocar a vida do ser humano em perigo. A ideia de que algo ou alguma coisa possa ameaçar a segurança ou a vida de alguém, faz com que o cérebro ative, involuntariamente, uma série de compostos químicos que provocam reações que caracterizam o medo.</p>
            <p>O que me causam medo: </p>
            <ul>
              <li>Perder pessoas que amo</li>
              <li>Tempestade</li>
              <li>Mar</li>
              <li>Galinhas</li>
            </ul>
          </div>
          <img src="medias/img-medo.png" width="300px" alt=""/>
      </div></>

      <div className="title-empatia" id='pag-empatia'>
        <div>
          <a href="#inicio"><p className='voltar2'>início</p></a>
        </div>
          <img className='img2' src="medias/img-empatia.png" width="300px" alt=""/>
          <div className="texto">
            <h2>Empatia</h2>
            <p className="p-texto">Empatia é a capacidade psicológica de sentir o que sentiria outra pessoa, caso estivesse na mesma situação vivenciada por ela. É tentar compreender sentimentos e emoções, procurando experimentar o que sente outro indivíduo.</p>
            <p>Acontecimentos que sinto empatia:</p>
            <ul>
              <li>Ao ver um morador de rua</li>
              <li>Presenciar julgamento injusto de alguém</li>
              <li>Pessoas lidando com luto</li>
              <li>Ver alguém com dificuldade de aprender/realizar algo</li>
            </ul>
          </div>
      </div></>

      <div className="title-romance" id='pag-romance'>
          <div className="texto">
            <div>
              <a href="#inicio"><p className='voltar'>início</p></a>
            </div>
            <h2>Romance</h2>
            <p className="p-texto">Relacionado ao amor, como uma necessidade para viver, o romance é um sentimento expressivo e agradável de uma atração emocional por outra pessoa. É uma emoção que se constrói a partir da paixão, da partilha, da confiança e da intimidade.</p>
            <p>Pessoa por quem sinto essa emoção:</p>
            <ul>
              <li>L....</li>
            </ul>
          </div>
          <img src="medias/img-romance.png" width="300px" alt=""/>
      </div></>
      
      <div className="title-nostalgia" id='pag-nostalgia'>    
        <div>
          <a href="#inicio"><p className='voltar2'>início</p></a>
        </div>
          <img className='img2' src="medias/img-nostalgia.png" width="300px" alt=""/>
          <div className="texto">
            <h2>Nostalgia</h2>
            <p className="p-texto">A nostalgia transmite ao coração uma emoção semelhante à saudade de uma era que já passou. Diferente da saudade, aquela emoção intensa e dolorosa, mas que desaparece assim que voltamos a encontrar uma pessoa, a nostalgia não cessa quando nos deparamos com alguém que estava distante de nós, por exemplo, mas sim se fortalece, pois nutre este sentimento de perda de uma época que não mais retornará.</p>
            <p>Momentos que me causam nostalgia:</p>
            <ul>
              <li>Jogar PlayStation 2</li>
              <li>Assistir filmes que via na infância</li>
              <li>Visitar a cidade que vivi na infância</li>
              <li>Ouvir músicas que me viciaram na adolescência</li>
            </ul>
          </div>
      </div></>
  )}

export default Home;
