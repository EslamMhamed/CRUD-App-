export async function fetchPosts() {
    const response = await fetch("http://localhost:3000/posts")

    return  response.json()
}


export async function fetchPost({id}) {
  const response = await fetch(`http://localhost:3000/posts/${id}`);

  if (!response.ok) {
    throw new Error(`Post not found (status: ${response.status})`);
  }

  return response.json();
}

export async function createPost(newPost) {
  const response = await fetch("http://localhost:3000/posts",  {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  });

  if (!response.ok) {
    throw new Error(`Failed to new post (status: ${response.status})`);
  }

  return response.json();
}

export async function updatePost(updatedPost) {
  const response = await fetch(`http://localhost:3000/posts/${updatedPost.id}`,  {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedPost)
  });

  if (!response.ok) {
    throw new Error(`Failed to update post (status: ${response.status})`);
  }

  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`,  {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete post (status: ${response.status})`);
  }

  return response.json();
}