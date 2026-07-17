import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Users from "./components/users/Users.jsx";
import Posts from "./components/post/Posts.jsx";
import ToDos from "./components/todos/ToDos.jsx";
import UserDetails from "./components/users/userDetails/UserDetails.jsx";
import PostDetails from "./components/post/PostDetails.jsx";
import ToDoDetails from "./components/todos/ToDoDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
      {
        path: "todos",
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
        Component: ToDos,
      },
      {
        path: '/todo/:todoId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`),
        Component: ToDoDetails
      },
      {
        path: '*',
        element: <h1>Not Found</h1>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
