import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loader from "./components/etc/Loader";
import { useState, useEffect } from "react";
import News from "./pages/News";
import UserLayout from "./layouts/UserLayout";
import About from "./pages/About";
import Contents from "./pages/Contents";
import Anime from "./pages/contents/Anime";
import Comics from "./pages/contents/Comics";
import Game from "./pages/contents/Game";
import TopContents from "./pages/contents/TopContents";
import Music from "./pages/contents/Music";
import Event from "./pages/contents/Event";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Homepage />} />
            <Route path="news" element={<News />} />
            <Route path="about" element={<About />} />
            <Route path="contents" element={<Contents />}>
              <Route path="video" element={<Anime />} />
              <Route path="comics" element={<Comics />} />
              <Route path="game" element={<Game />} />
              <Route path="event" element={<Event/>} />
              <Route path="topContents" element={<TopContents />} />
              <Route path="music" element={<Music />} />
            </Route>
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;
