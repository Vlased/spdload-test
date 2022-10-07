import React from 'react'
import FavoriteBackground from './components/FavoriteBackground'
import FavoriteGrid from './components/FavoriteGrid'
import StyledFavorite from './Favorite.styled'

const Favorite: React.FC = () => {
  return (
    <StyledFavorite>
      <FavoriteBackground />
      <FavoriteGrid />
    </StyledFavorite>
  )
}

export default Favorite