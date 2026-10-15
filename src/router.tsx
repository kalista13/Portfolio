/*import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experiences from "./pages/Experiences/Experiences";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contacts/Contacts";

import './AppRouter.scss';

export default function AppRouter() {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <section id="Home"><Home /></section>
        <section id="About"><About /></section>
        <section id="Experiences"><Experiences /></section>
        <section id="Projects"><Projects /></section>
        <section id="Contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}*/
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experiences from "./pages/Experiences/Experiences";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contacts/Contacts";

import PathPlanning from "./pages/ProjectDetails/PathPlanning";
import Bioreactor from "./pages/ProjectDetails/Bioreactor";

import './AppRouter.scss';

function MainWebsite() {
  return (
    <>
      <main className="main-content">
        <section id="Home">
          <Home />
        </section>

        <section id="About">
          <About />
        </section>

        <section id="Experiences">
          <Experiences />
        </section>

        <section id="Projects">
          <Projects />
        </section>

        <section id="Contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <Navigation />

        <Routes>
          <Route path="/" element={<MainWebsite />} />

          <Route
            path="/projects/path-planning"
            element={<PathPlanning />}
          />

          <Route
            path="/projects/bioreactor"
            element={<Bioreactor />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}