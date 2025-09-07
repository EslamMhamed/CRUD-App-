import React from 'react'
import PostForm from './PostForm'
import { useMutation } from '@tanstack/react-query'
import {createPost} from '../util/index' 
import { v4 as uuidv4 } from 'uuid'   
import { queryClient } from '../main'

function AddPost() {

  const {mutate} = useMutation({
    mutationKey: ["psot"],
    mutationFn: createPost,
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey: ["posts"]})
    }
  })

  function handleAddPost(post){
    mutate({
      id: uuidv4(),
      ...post
    })
  }

  return (
    <div>
        <h2>Add new post</h2>
        <PostForm onSubmit= {handleAddPost} />
    </div>
  )
}

export default AddPost