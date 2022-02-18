import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Pitch from "./components/Pitch/Pitch";
import Solar from "./components/Solar/Solar";
import Testimonials from "./components/Testimonials/Testimonials";
import Main from "./components/Main/Main";
import './index.css'



function App() {
  return (
   <main>
     <Navbar />
     <Main />
     <Solar />
     <Pitch />
     <Clients />
     <Testimonials />
     <Contact />
   </main>
  );
}

export default App;
