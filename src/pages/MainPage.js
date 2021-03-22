import Header from '../components/Header/Header';
import About from '../components/sections/About/About';
import Skills from '../components/sections/Skills/Skills';
import Experience from '../components/sections/Experience/Experience';
import Portfolio from '../components/sections/Portfolio/Portfolio';
import Contact from '../components/sections/Contact/Contact';
import Footer from '../components/Footer/Footer';

function MainPage() {
  return (
    <div className="l-page">
      <div className="l-page-layout">
        <div className="l-header">
          <Header></Header>
        </div>
        <main class="l-main">
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </main>
        <div class="l-footer">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
