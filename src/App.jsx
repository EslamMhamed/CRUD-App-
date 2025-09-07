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
    <div className="max-w-7xl mx-auto mt-3 p-5">
      <h1 className="text-4xl text-center text-gray-700 ">Awesome blog</h1>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
