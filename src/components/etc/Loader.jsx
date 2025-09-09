import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Loader = ({ onComplete }) => {
  const location = useLocation();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (location.pathname !== "/") return;

    let interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete(); // chỉ gọi 1 lần khi hoàn tất
          return 200;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [location.pathname, onComplete]);

  // Không hiện loader ngoài trang "/"
  // if (location.pathname !== "/") return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img
        className="w-50"
        src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/69446b91ccca41efb945cf7a3c69431a/32_agnestachyon.webp"
        alt="Loader"
      />
      <p className="text-xl font-semibold italic mt-0">読み込み中</p>

      {/* Progress bar */}
      {/* <div className="w-64 h-2 bg-gray-200 rounded mt-6 overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-100 ease-linear"
          style={{ width: `${percent}%` }}
        ></div>
      </div> */}
    </div>
  );
};

export default Loader;
