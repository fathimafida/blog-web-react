import { Toaster } from "sonner";
import NavBar from "./components/NavBar";
import Blogs from "./Pages/Blogs";
import BlogDetailPage from "./Pages/components/BlogDetailPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toaster />
      <div className="bg-gradient-to-br from-slate-900 to-slate-700 min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
