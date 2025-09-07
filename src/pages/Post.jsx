// Post.jsx
import {  useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {  fetchPost } from "../util";

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost({id}),
  });

  if (isLoading) return "Loading...";
  if (isError) return `Error : ${error.message}`;




  return (
    <div>
      <button className="px-4 py-2 bg-gray-300 hover:bg-gray-500  rounded-md " onClick={() => navigate("/")}>Back</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
