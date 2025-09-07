import { useQuery } from "@tanstack/react-query";
import AddPost from "../components/AddPost";
import { fetchPosts } from "../util";
import { useNavigate } from "react-router-dom";

function PostLists() {

  const navigate = useNavigate()

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return "Loading...";
  if (isError) return `Error : ${error.message}`;

  return (
    <div>
      <AddPost />
      {posts.map((post) => (
        <div key={post.id}
          className="bg-gray-100 p-3 flex flex-col mt-3  "
        >
          <h4 className="text-center font-semibold text-2xl hover:text-3xl cursor-pointer transition-all duration-300"
          onClick={() => navigate(`/post/${post.id}`)}
          >{post.title}</h4>
          <div className="flex items-center justify-between">
            <button onClick={()=> navigate(`/post/${post.id}/edit`)}
             className="px-4 py-2 bg-gray-300 hover:bg-gray-500 rounded-md ">Edit</button>
            <button className="px-4 py-2 bg-gray-300 hover:bg-gray-500  rounded-md ">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostLists;
