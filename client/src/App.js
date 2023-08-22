import { BrowserRouter, Routes, Route } from "react-router-dom"; import './App.css';
import Home from "./Components/Home/Home";
import CreateBook from "./Components/CreateBook/CreateBook";
import EditBooks from "./Components/EditBooks/EditBooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add-book" element={<CreateBook />} />
          <Route path="edit/:id" element={<EditBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
