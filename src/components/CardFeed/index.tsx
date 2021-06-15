import { FeedBox, Avatar, BarSuperior, BarInferior, FigImage } from './style'
import Image from 'next/image'
import Text from '@components/foundation/Text'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
// import { useState } from 'react'

interface ICardFeed {
  profileUrl: string;
  url: string;
  profileName: string;
  filter: string;
  likes: boolean;
}

// interface IPost {
//   like: boolean,
//   position: number
// }

export default function CardFeed ({ profileUrl, profileName, filter, likes, url }: ICardFeed) {
  // const [posts, setPosts] = useState<IPost>()

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
        <FigImage
          className={`filter-${filter}`}
          // onClick={() => setPosts({
          //   like: !likes,
          //   position: 0
          // })}
        >
          <img
            src={url}
          />
        </FigImage>
        <BarInferior>
          <FavoriteIcon />
        </BarInferior>
      </FeedBox>
  )
}
