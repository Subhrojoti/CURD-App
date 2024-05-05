import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animals from "./Animals";
import CreateAnimal from "./CreateAnimal";
import Update from "./Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Animals />}></Route>
          <Route path="/create" element={<CreateAnimal />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
