import { User } from "../types/User";

const AlbumsList = ({ user }: {user: User}) => {
  return <div>
    Albums for {user.name}
  </div>;
};

export default AlbumsList;
