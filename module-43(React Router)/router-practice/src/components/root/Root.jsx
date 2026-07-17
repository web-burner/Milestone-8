import { Outlet, useNavigation } from "react-router";
// import Home from "../home/Home";
import Navbar from "../navbar/Navbar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);
  return (
    <div>
      <Navbar></Navbar>
      {isNavigation ? <p>Loading...</p> : <Outlet></Outlet>}
    </div>
  );
};

export default Root;
