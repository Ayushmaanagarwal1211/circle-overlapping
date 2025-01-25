import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    initialState:{
        posts : [],
        theme : true,
        user_name : "Ayushmaan"
    },
    name : "Posts",
    reducers : {
        change_theme : (state)=>{
            state.theme = !state.theme
        },
        fill : (state,action)=>{
            state.posts = action.payload
        },
        add_post : (state,action)=>{
            const {user_name ,user_profile_picture, title, image} = action.payload
            const post = {
               id : genId(state.posts), 
               user_name,
               user_profile_picture ,
               title,image, 
               time_stamp : new Date().toString(),
               comments : [], 
               likes : [] 
            }
            state.posts.push(post)
        },
        like : (state,action)=>{
            const {id , user_name} = action.payload
            const index = findIndexById(state.posts,id)
            const isUser = state.posts[index].likes.find(data=>data == user_name)
            if(isUser){
                state.posts[index].likes = state.posts[index].likes.filter(data => data !== user_name)
            }else{
                state.posts[index].likes.push(user_name)
            }
        },
        add_comment : (state,action) => {
            const {id , comment_text,user_name, user_profile_picture} = action.payload
            const index = findIndexById(state.posts,id)
            const comment = {
                comment_id : genCommentId(state.posts[index].comments),
                comment_text , 
                user_name, 
                user_profile_picture,
                time_stamp : new Date().toString()}
            state.posts[index].comments.push(comment)
        },
        edit_comment : (state,action) =>{
            const {comment_id,id , comment_text} = action.payload
            const index = findIndexById(state.posts,id)
            state.posts[index].comments = state.posts[index].comments.map((data)=>{
                if(data.comment_id == comment_id){
                    return {...data, comment_text}
                }
                return data
            })
        },
        delete_comment : (state,action)=>{
            const {comment_id, id} = action.payload
            const index = findIndexById(state.posts, id)
            state.posts[index].comments = state.posts[index].comments.filter((data)=>data.comment_id !== comment_id)
        }
    }
})
export function selectUserName(state){
    return state.posts.user_name
}
export function selectTheme(state){
    return state.posts.theme
}
export function selectPosts(state){
    return state.posts.posts
}

function findIndexById(arr,id){
    return arr.findIndex(data=>data.id == id)
}
function genId(arr){
    let max = -1
    for(let i of arr){
        max = Math.max(max , i.id)
    }
    return max+1
}
function genCommentId(arr){
    let max = -1
    for(let i of arr){
        max = Math.max(max , i.comment_id)
    }
    return max+1
}

export const {fill,add_post,like, add_comment, edit_comment, delete_comment,change_theme} = slice.actions
export default slice.reducer