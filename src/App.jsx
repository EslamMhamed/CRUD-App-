import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./components/ErrorPage"
import PostLists from "./pages/PostLists"
import Post from "./pages/Post"
import EditPost from "./pages/EditPost"


function App() {

  const router= createBrowserRouter([
    {path:"/" , element: <PostLists />, errorElement:<ErrorPage/> },
    {path: "/post/:id", element:<Post/>},
    {path: "/post/:id/edit", element:<EditPost/>},
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
