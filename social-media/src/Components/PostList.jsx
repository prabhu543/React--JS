// import React from 'react'
import { useContext  } from 'react';
import { PostListContext as PostListProvider} from "../store/Posts-List-store"

import Post from './Post';
const PostList = () => {
  const { postList } = useContext(PostListProvider);
  console.log(postList)
  return (
    <>
    {postList.map((post , index) => {
      return (
        <Post key={post.id + index}  post = {post}/>
      )
    })}
    </>
  )
}

export default PostList;
