import { useLoaderData } from "react-router";
import User from "./user/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className=" grid grid-cols-3 gap-5">
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default Users;
