import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPage from "./components/EditPage";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFoundPage";
// import Test from "./components/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-todo" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element = {<Test />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
