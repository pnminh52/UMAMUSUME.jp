import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Loader = ({ onComplete }) => {
  const location = useLocation();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [location.pathname, onComplete]);

  if (location.pathname !== "/") return null; 

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img
        className="w-60"
        src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/69446b91ccca41efb945cf7a3c69431a/32_agnestachyon.webp"
        alt=""
      />
      <p className="text-2xl font-semibold italic">読み込み中</p>
    </div>
  );
};

export default Loader;
