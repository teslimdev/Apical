
import { Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home,About,News,Projects,Contacts,Services } from "./container";

function App() {
  return (
    <div className="App">
     <div>
      <Header />
     </div>
     <div>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contacts" element={<Contacts />} />
     </Routes>
     </div>

    <div>
            <Footer />
    </div>
    </div>
  );
}

export default App;
