import { useEffect, useState, useRef } from "react";

const Loader = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        const next = prev + 1;
        if (next >= 100 && !completedRef.current) {
          completedRef.current = true;
          // ✅ gọi onComplete trong setTimeout để chắc chắn là async
          setTimeout(() => onComplete(), 0);
        }
        return next >= 100 ? 100 : next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img
        className="w-70"
        src="https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/69446b91ccca41efb945cf7a3c69431a/32_agnestachyon.webp"
        alt="Loader"
      />
      <p className="text-xl font-semibold italic mt-0">読み込み中</p>
    </div>
  );
};

export default Loader;
