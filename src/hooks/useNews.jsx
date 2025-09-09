import { useState, useEffect } from "react";

// hook
export const useNews = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${apiUrl}/news`); 
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
  
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
