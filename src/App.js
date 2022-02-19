import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cric from "./Component/Cric/Cric";
import Result from "./Component/Cric/Result";
import { Container } from "react-bootstrap";
import { Emh } from "./Component/Emh/Emh";
import { Start } from "./Component/Emh/Start";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="emh" element={<Emh/>}/>
          <Route path="cric" element={<Cric/>} />
          <Route path="result" element={<Result/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
