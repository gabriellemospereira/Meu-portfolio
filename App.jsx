import Logo from "./img/grlp_logo.png";

import MainContent from './pages/MainContent';
import Projects from './pages/Projects';
import Sidebar from './pages/Sidebar';



import "./styles/components/app.sass";

function App() {

  return (
  <div id="portfolio">
      <img src={Logo} alt="Gabriel Rafael"  id="logo"/>
      <MainContent />
      <Sidebar />   
      <section>
      <h1 class="title-txt">Sobre mim</h1>
      <p class="txt-first">Olá , sou Gabriel Rafael de Lemos Pereira, 
        um desenvolvedor fullstack em formação, apaixonado por tecnologia.
      </p>
      <p class="txt-secondary">
        Eu tenho 31 anos de idade estou estudando 
        análise e desenvolvimento de sistemas pela 
        UNIFIL-Filadélfia , 
        estou buscando aprofundar meus conhecimentos e estudando programação em back-end para me especializar em um desenvolvedor full stack.
      </p>
    </section>
    <footer>
    <p>Site desenvolvido por Gabriel Rafael | &copy;2024</p>
  </footer>  
  </div>
  )
  
}

export default App