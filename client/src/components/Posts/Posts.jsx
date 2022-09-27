import React from 'react'
import Post from './Post/Post'

import './posts.scss'

export const Posts = () => {
  return (
    <>
    <div className='posts-wrapper'>
       <Post />
       <Post />
       <Post />
    </div>
    </>
  )
}
