import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_post } from '../reducer/postsSlice';

export default function Header({theme}) {
  const [post, setPost] = useState({ title: "", image: "", user_name:"Ayushmaan",user_profile_picture:""
   });
  const dispatch = useDispatch();

  function handleChange(e) {
    const obj = { ...post };
    const file = e.target.files;
    if (file ) {
        obj.image = URL.createObjectURL(file[0])
     } else {
      obj.title = e.target.value;
    }
    setPost(obj);
  }

  function handleAddPost() {
    dispatch(add_post(post));
    setPost({...post, title:"",image:""})
  }

  return (
    <div className={` w-full flex flex-col items-center `}>
      <div className={`${theme ?"bg-gray-100":"bg-black text-white border-white border-[1px]"} w-[70vw] flex flex-col gap-4 items-start  p-6 rounded-lg shadow-md`}>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="title-input" className={`${theme ?"text-gray-700":"text-white"} font-medium`}>
            Post Title
          </label>
          <input
            id="title-input"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={post.title}
            name="title"
            placeholder="Enter post title"
          />
        </div>

        <div className="flex items-center gap-4 w-full">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Upload Image
          </label>
          <input
            type="file"
            hidden
            onChange={handleChange}
            id="file-upload"
            name="image"
          />
          <button
            onClick={handleAddPost}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Add Post
          </button>
        </div>
      </div>

      {post.image && (
        <div className="mt-6">
          <img
            className="w-[30vw] h-[40vh] object-cover rounded-md shadow-lg"
            onError={() => console.log(post.image)}
            src={post.image}
            alt="Post preview"
          />
        </div>
      )}
    </div>
  );
}
