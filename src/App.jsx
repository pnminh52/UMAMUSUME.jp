import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loader from "./components/etc/Loader";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
