import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Academics from "./pages/Academics";
import Aboutus from "./pages/AboutUs";
import News from "./pages/News-events";
import Login from "./pages/Login";
import Layout  from "./pages/layout";
import Homepage from "./pages/Homepage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Homepage/>} />
            <Route path="Homepage" element={<Homepage/>} />
            <Route path="Academics" element={<Academics/>} />
            <Route path="News-events" element={<News/>} />
            <Route path="AboutUs" element={<Aboutus/>} />
            <Route path="Login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>

      
    </div>
    
  );
}

export default App;
