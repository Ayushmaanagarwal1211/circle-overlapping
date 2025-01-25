import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { like, selectPosts } from '../reducer/postsSlice';
import Post from './Post';
import { setDataToBackend } from '../service/localstorage';

export default function Posts() {
  const posts = useSelector((state) => selectPosts(state));
  const dispatch = useDispatch();
  useEffect(()=>{
    setDataToBackend(posts)
  },[posts])
  
  function handleLike(id) {
    dispatch(like({ id, user_name:"Ayushmaan" }));
  }

  return (
    <div className="grid grid-cols-2 w-[70%] m-auto items-center space-y-6 mt-4">
      {posts.map((data) => (
        <Post  key={data.id} post={data} handleLike={handleLike} />
      ))}
    </div>
  );
}
