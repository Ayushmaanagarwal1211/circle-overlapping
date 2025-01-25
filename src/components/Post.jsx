import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment.jsx';
import { add_comment, delete_comment, edit_comment, selectTheme, selectUserName } from '../reducer/postsSlice.js';
import { comment } from 'postcss';

export default function Post({ post, handleLike }) {
  const dispatch = useDispatch();
  const [comment_text, setCommentText] = useState("");
  const theme = useSelector(state => selectTheme(state))
  const user_name = useSelector(state => selectUserName(state))
  
  function handleAddComment() {
    if (comment_text.trim()) {
      dispatch(add_comment({ id: post.id, comment_text, user_name, user_profile_picture:"" }));
      setCommentText("");
    }
  }
  function handleDeleteComment(comment_id){
    dispatch(delete_comment({id:post.id, comment_id}))
  }
  function handleEditComment(comment_id, comment_text){
    dispatch(edit_comment({comment_id,comment_text , id:post.id}))
  }
  function handleChange(e){
    if(e.target.value.length <=200){
      setCommentText(e.target.value)
    }
  }
  return (
    <div className={`${theme ?"bg-gray-100":"bg-black text-white border-white border-[1px]"} shadow-md rounded-lg p-4 h-[550px] w-[100%]`}>
      <h1 className={`${theme ?"":"text-white"} text-lg font-bold text-gray-800`}>{post.title}</h1>
      <img className="w-full h-48 object-cover rounded-md my-4" src={post.image} alt="Post" />
      <div className="flex items-center space-x-3 mb-4">
        <FaHeart
          className="text-red-500 cursor-pointer"
          onClick={() => handleLike(post.id)}
        />
        <span className="text-gray-600">{post.likes.length}</span>
      </div>
      <div className="flex items-center space-x-3">
        <input
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add Comment"
          value={comment_text}
          onChange={handleChange}

        />
        {comment_text.length}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleAddComment}
        >
          Add
        </button>
      </div>
      <div className="mt-4 space-y-3 h-[160px] overflow-y-scroll">
        {post.comments.map((data) => (
          <Comment user_name={user_name} key={data.comment_id} handleDelete={handleDeleteComment} handleEdit={handleEditComment} comment={data} />
        ))}
      </div>
    </div>
  );
}
