import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loader from "./components/etc/Loader";
import { useState, useEffect } from "react";
import News from "./pages/News";
import UserLayout from "./layouts/UserLayout";
import About from "./pages/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Chặn chuột phải
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <Routes>
          {/* Dùng UserLayout cho tất cả route */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Homepage />} />
            <Route path="news" element={<News />} />
            <Route path="about" element={<About />} />

          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
