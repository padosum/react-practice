import { GoTrash } from "react-icons/go";
import Button from "./Button";

import { removeUser } from "../store";

import { User } from "../types/User";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }: { user: User }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = <>
    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
      <GoTrash />
    </Button>
    {error && <div>Error deleting user.</div>}
    {user.name}
  </>
  
  return <ExpandablePanel header={header}>
    <AlbumsList user={user}/>
  </ExpandablePanel>
};

export default UsersListItem;
