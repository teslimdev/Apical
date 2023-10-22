import { Header, Footer, Footer2 } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  News,
  Projects,
  Contacts,
  Services,
  Home2,
  NewsPost1,
  ProjectPost1,
  Construction,
  Visualization,
  Interior,
  Architecture,
  Exterior
} from "./container";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/Footer2" element={<Footer2 />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home2" element={<Home2 />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/NewsPost1" element={<NewsPost1 />} />
          <Route path="/ProjectPost1" element={<ProjectPost1 />} />
          <Route path="/Architecture" element={<Architecture />} />
          <Route path="/Visualization" element={<Visualization />} />
          <Route path="/Interior" element={<Interior />} />
          <Route path="/Construction" element={<Construction />} />
           <Route path="/Exterior" element={<Exterior/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
