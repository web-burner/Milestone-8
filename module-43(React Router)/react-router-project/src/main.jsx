import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Mobiles from "./components/mobiles /Mobiles.jsx";
import Laptops from "./components/laptops/Laptops.jsx";
import Users1 from "./components/Users1/Users1.jsx";
import { Suspense } from "react";
import Users2 from "./components/user2/Users2.jsx";
// import User from "./components/user/user.jsx";
import UsersDetails from "./components/user/UsersDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/Posts/PostDetails.jsx";

const usersFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const usersPromise = usersFetch();
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users1",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users1,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UsersDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "post/:postId",
        loader: ({params}) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          ,
        Component: PostDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
