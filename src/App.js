import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Media from "./components/Media/Media";
import Navbar from "./components/Navbar/Navbar";
import Solar from "./components/Solar/Solar";
import Testimonials from "./components/Testimonials/Testimonials";
import './index.css'



function App() {
  return (
   <main>
     <Navbar />
     <About />
     <Solar />
     <Media />
     <Clients />
     <Testimonials />
     <Contact />
   </main>
  );
}

export default App;
