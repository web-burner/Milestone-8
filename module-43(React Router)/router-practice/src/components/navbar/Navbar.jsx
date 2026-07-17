import { NavLink } from "react-router";
import '../../App.css'
const Navbar = () => {
  return (
    <nav className=" flex gap-5 justify-center p-10 text-xl font-bold">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
      <NavLink to={"/posts"}>Posts</NavLink>
      <NavLink to={"/todos"}>ToDos</NavLink>
    </nav>
  );
};

export default Navbar;
