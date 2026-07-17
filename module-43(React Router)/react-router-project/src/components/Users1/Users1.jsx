import { useLoaderData } from "react-router";
import User from "../user/User";

const Users1 = () => {
  const users = useLoaderData();
  // console.log(users)
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default Users1;
