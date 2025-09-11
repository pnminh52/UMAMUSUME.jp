import { useState, useEffect } from "react";

import React from 'react'

export const useGames = () => {
    const apiUrl = "http://localhost:3000"
  const [games, setGames]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState(null)
  useEffect(()=>{
    const fetchGames = async ()=>{
        try{
            const res = await fetch(`${apiUrl}/games`);
            const text = await res.text()
            const data =JSON.parse(text)
            setGames(data)
        } catch (err){
            setError(err.message);
        } finally{
            setLoading(false)
        }
    }
    fetchGames()
  },[])
return {games, loading, error}
}

 