import { FeedBox, Avatar, BarSuperior, BarInferior, FigImage } from './style'
import Image from 'next/image'
import Text from '@components/foundation/Text'
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
          {Number(like)}
        </Text>
      </BarInferior>
    </FeedBox>
  )
}
