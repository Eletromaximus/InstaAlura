import { FeedBox, Avatar, BarSuperior, BarInferior, FigImage } from './style'
import Image from 'next/image'
import Text from '@components/foundation/Text'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import { useState, useEffect } from 'react'
import useLikes from '@hooks/useLikes'

interface ICardFeed {
  profileUrl: string;
  url: string;
  profileName: string;
  filter: string;
  likeInitial: boolean;
  id: string;
  token: string;
}

export default function CardFeed ({
  profileUrl,
  profileName,
  filter,
  likeInitial,
  url,
  id,
  token
}: ICardFeed) {
  const [like, favorite, changeValue] = useLikes({ likeInitial: likeInitial, id: id, token: token })
  // const [like, setLike] = useState(likeInitial || false)
  // const [favorite, setFavorite] = useState(like ? <FavoriteIcon /> : <FavoriteBorderIcon />)

  // const fav = like ? <FavoriteIcon /> : <FavoriteBorderIcon />

  // useEffect(() => {
  //   setFavorite(fav)
  // }, [like])

  // async function UpdateLike () {
  //   await fetch('/api/updateLike', {
  //     method: 'Post',
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       like: Number(like),
  //       id: id
  //     })
  //   })
  //     .catch((err) => {
  //       throw new Error(err)
  //     })
  // }

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
              changeValue()
              // setLike(!like)
              // UpdateLike()
            }}
          >
            <img
              src={url}
            />
          </FigImage>
        </div>
      <BarInferior>
        {favorite}
        {/* {favorite} */}
        <Text
          marginLeft='10px'
          variant='paragraph1'
        >
          {Number(like)}
          {/* {Number(like)} */}
        </Text>
      </BarInferior>
    </FeedBox>
  )
}
