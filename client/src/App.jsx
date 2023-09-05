import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CuestionarioPage, HomePage, JuegoPage } from "./pages";
import LayoutTrivia from "./layouts/LayoutTrivia";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutTrivia />}>
          <Route index element={<HomePage/>}/>
          <Route path="cuestionario" element={<CuestionarioPage/>}/>
          <Route path="trivia" element={<JuegoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
