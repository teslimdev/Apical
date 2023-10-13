
import { Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home,About,News,Projects,Contacts,Services,Home2 , NewsPost1, ProjectPost1} from "./container";

function App() {
  return (
    <div className="App">
     <div>
      <Header />
     </div>
     <div>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contacts" element={<Contacts />} />
           <Route path="/NewsPost1" element={<NewsPost1 />} />
            <Route path="/ProjectPost1" element={<ProjectPost1 />} />
     </Routes>
     </div>

    <div>
            <Footer />
    </div>
    </div>
  );
}

export default App;
