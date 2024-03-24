import avatarGif from '@/assets/nightcrawler-gyllenhaal.gif'
import './avatar-user.scss'
export const AvatarUser = () => {
  return (
      <div className="avatar-user">
          <img src={avatarGif}  alt=""/>
      </div>
  );
}