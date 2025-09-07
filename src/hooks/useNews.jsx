import { useState, useEffect } from "react";

// hook
export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:3000/news"); 
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
  
        // vì API trả về mảng -> set trực tiếp
        setNews(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchNews();
  }, []);
  

  const getNewsByTag = (tag) => {
    if (!tag) return news;
    return news.filter((item) => item.tag === tag);
  };

  return { news, loading, error, getNewsByTag };
};
