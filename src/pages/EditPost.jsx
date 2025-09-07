import React from 'react'
import PostForm from '../components/PostForm'
import {  useMutation, useQuery } from '@tanstack/react-query'
import { fetchPost, updatePost } from '../util'
import { useNavigate, useParams } from 'react-router-dom'
import { queryClient } from '../main'

function EditPost() {

  const {id} = useParams()
  const navigate = useNavigate()

  const {data:post , isLoading, isError, error} = useQuery({
    queryKey: ["posts", id],
    queryFn: ()=> fetchPost({id})
  })

    const {mutate} = useMutation({
    mutationFn: updatePost,
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey: ["posts"]})
      navigate("/")
    }
  })

  function handleSubmit(updatedPost){
    mutate({id, ...updatedPost})
  }


  if (isLoading) return "Loading...";
  if (isError) return `Error : ${error.message}`;



  return (
    <div>
      <PostForm onSubmit={handleSubmit} intialValue = {post} />
    </div>
  )
}

export default EditPost