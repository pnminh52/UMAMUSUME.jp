import { useState, useEffect } from "react";

// hook
export const useNews = () => {
  const apiUrl =  import.meta.env.VITE_API_URL 

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${apiUrl}/news`);
        const text = await res.text();
        console.log(text); // xem server trả gì
        const data = JSON.parse(text); // sẽ fail nếu text không phải JSON
        
  
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
