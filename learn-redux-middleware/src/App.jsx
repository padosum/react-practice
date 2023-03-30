import "./App.css";
import { Routes, Route } from "react-router-dom";

import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PostListPage />} />
        <Route path=":id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;