import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from './components/Movies'
import Footer from "./components/Footer";



function App() {
  return (
    <>
       <BrowserRouter>
          <Header />
          <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="/movies" element={<Movies />}></Route>
          </Routes>
          <Footer />
       </BrowserRouter>
    </>
  );
}

export default App;
