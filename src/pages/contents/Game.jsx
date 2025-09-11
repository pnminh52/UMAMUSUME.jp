import React from 'react'
import { useGames } from '../../hooks/useGames'
import Loader from './../../components/etc/Loader';
import GameCards from './../../components/contents/games/GameCards';
import Title from './../../components/news/Title';
import VideoTop from './../../components/contents/games/VideoTop';
const Game = () => {
  const {games, loading, error}=useGames()
  if (error) return <p>{error}</p>

  if (loading) return <><Loader /></>
  return (
    <div className="bg-gray-100   ">
        <VideoTop />
     <div className="sm:px-45 px-4 py-8">
  <GameCards games={games} />
</div>

    </div>
  )
}

export default Game