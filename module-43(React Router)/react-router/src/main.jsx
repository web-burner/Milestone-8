import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {createBrowserRouter} from 'react-router';
import {RouterProvider} from 'react-router/dom'
import Root from './components/root/Root.jsx';
// import { Children } from 'react';
import Home from './components/Home/Home.jsx';
import Users from './components/users/Users.jsx';
import Posts from './components/post/Posts.jsx';
import UserDetails from './components/users/UserDetails.jsx';
import PostDetails from './components/post/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'users',loader:()=> fetch("https://jsonplaceholder.typicode.com/users"), Component: Users},
      {path: 'posts', loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts"),Component: Posts},
      {
        path: 'user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'post/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
