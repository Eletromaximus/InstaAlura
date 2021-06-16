import { FeedBox, Avatar, BarSuperior, BarInferior, FigImage } from './style'
import Image from 'next/image'
import Text from '@components/foundation/Text'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { useState, useEffect } from 'react'

interface ICardFeed {
  profileUrl: string;
  url: string;
  profileName: string;
  filter: string;
  likes: boolean;
  likeNumbers: number;
  id: string;
  token: string;
}

// interface IPost {
//   like: boolean,
//   position: number
// }

export default function CardFeed ({
  profileUrl,
  profileName,
  filter,
  likes,
  url,
  likeNumbers,
  id,
  token
}: ICardFeed) {
  const [like, setLike] = useState(likes || false)
  const [favorite, setFavorite] = useState(like ? <FavoriteIcon /> : <FavoriteBorderIcon />)
  const [numLikes, setNumLikes] = useState(likeNumbers || 0)

  const fav = like ? <FavoriteBorderIcon /> : <FavoriteIcon />

  useEffect(() => {
    setFavorite(fav)
    setNumLikes(like ? (numLikes - 1) : (numLikes + 1))
  }, [like])

  // useEffect(() => {
  //   UpdateLike()
  // }, [numLikes])

  async function UpdateLike () {
    return await fetch('/api/updateLike', {
      method: 'Post',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: numLikes,
        id: id
      })
    })
      .then(async (res) => {
        if (res.ok) {
          return console.log(res)
        }
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  return (
    <FeedBox>
      <BarSuperior>
        <Avatar>
          <Image
            width={51}
            height={51}
            src={profileUrl}
            alt='Avatar image'
            layout='intrinsic'
          />

          <Text
            variant='subtitle'
          >
            {profileName}
          </Text>
        </Avatar>
        <Text
          variant='title'
        >
          ...
        </Text>
      </BarSuperior>
        <div className="imagefeed">
          <FigImage
            className={`filter-${filter}`}
            onClick={(e: any) => {
              e.preventDefault()
              setLike(!like)
              UpdateLike()
            }}
          >
            <img
              src={url}
            />
          </FigImage>
        </div>
      <BarInferior>
        {favorite}
        <Text
          marginLeft='10px'
          variant='paragraph1'
        >
         {numLikes}
        </Text>
      </BarInferior>
    </FeedBox>
  )
}
