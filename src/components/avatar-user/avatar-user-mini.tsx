import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx"
import avatarGif from '@/assets/img/nightcrawler-gyllenhaal.gif'
import './avatar-user.scss'
import {Link} from "react-router-dom";
export const AvatarUserMini = ({userId}:{userId:number}) => {
  return (
      <Avatar className="avatar-user-mini">
          <Link className="avatar-user__link" to={`/user/${userId}`}
                state={{userId: `${userId}`}}/>
          <AvatarImage src={avatarGif} />
          <AvatarFallback>US</AvatarFallback>
      </Avatar>
  );
}