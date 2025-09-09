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
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <Router>
      <Routes>
        {loading ? (
          <Route
            path="*"
            element={<Loader onComplete={() => setLoading(false)} />}
          />
        ) : (
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Homepage />} />
            <Route path="news" element={<News />} />
            <Route path="about" element={<About />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}


export default App;
