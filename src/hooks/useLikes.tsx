import { useState, useEffect, useRef } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

interface ILike {
  likeInitial: boolean;
  id: string;
  token: string;
}
// eslint-disable-next-line no-undef
export default function useLikes ({ likeInitial, id, token }: ILike): [boolean, JSX.Element, (() => void)] {
  const [like, setLike] = useState(likeInitial || false)
  const [favorite, setFavorite] = useState(likeInitial ? <FavoriteIcon /> : <FavoriteBorderIcon />)
  const mount = useRef(false)

  useEffect(() => {
    if (mount.current) {
      setFavorite(like ? <FavoriteIcon /> : <FavoriteBorderIcon />)
      UpdateLike()
    } else {
      mount.current = true
    }
  }, [like])

  async function UpdateLike () {
    await fetch('/api/updateLike', {
      method: 'Post',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        like: Number(like),
        id: id
      })
    })
      .then(() => {
        console.log('entrou no hook')
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  const changeValue = () => {
    setLike(!like)
  }
  return [like, favorite, changeValue]
}
