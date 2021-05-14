import Bio from './BioBox'
import { Box } from '../../foundation/layout/Box'
export { getContent } from './getContent'

interface IProfile {
  messages: {
    name: string;
    bio: string;
    seguindo: number;
    seguidores: number;
    publicaEs: number;
    avatarImage: {
      url: string;
    }
  }
}
export default function ProfileScreen ({ messages } : IProfile) {
  return (
    <Box
      display='flex'
      justifyContent='center'
      margin='28px'
    >
      <Bio messages={messages} />
    </Box>
  )
}
