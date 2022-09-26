import React from 'react'
import Post from './Post/Post'

import './posts.scss'

export const Posts = () => {
  return (
    <>
    <div className='posts-wrapper'>
    <h1>POSTS</h1>
       <Post />
       <Post />
       <Post />
    </div>
    </>
  )
}
