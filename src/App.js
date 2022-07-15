import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Giris from "./components/Giris/Giris";
import Kayit from "./components/Kayit/Kayit";
import IlanVer from "./components/IlanVer/IlanVer";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/giris" element={<Giris />}></Route>
        <Route path="/kayitol" element={<Kayit />}></Route>
        <Route path="/ilanver" element={<IlanVer />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
