import { createContext , useReducer } from "react";

const defaultContext = {

}

export const PostListContext = createContext({
  postList: [],
  addPost : () =>{},
  deletePost : () =>{}
});

const postReducer = (currentPostList , action) =>{
  switch(action.type)
  {
    case "ADD_POST":
      return [...currentPostList , {}]
    case "DELETE_POST":
      return  currentPostList.filter((post) => post.id !== action.payload.postId)
    default :
    return currentPostList ;
  }
}

const PostListProvider = ({ children}) => {
  const [postList, dispatchPostList] = useReducer(postReducer, list);

  const addPost = (post) => {
    dispatchPostList({
      type : "ADD_POST",
      payload: {
        post,
      }
    })
  }

  const deletePost = (postId) => {
    dispatchPostList({
      type : "DELETE_POST",
      payload:{
        postId,
      }
    })
  }

  return (
    <PostListContext.Provider value={
    {
      postList,
      addPost,
      deletePost
    }
    } >
      {children}
    </PostListContext.Provider>
  )
}
const list = [
  {
    id: Date.now() + 1,
    title: "Master JavaScript",
    text: "Understand JavaScript deeply to improve your web development skills.",
    reactions: 3,
    userId: '',
    tags: ["JavaScript", "ES6"],
  },
  {
    id: Date.now() + 2,
    title: "Learn React.js",
    text: "Start building interactive UIs with React.js and components.",
    reactions: 5,
    userId: '',
    tags: ["React", "Frontend"],
  },
  {
    id: Date.now() + 3,
    title: "Understanding Node.js",
    text: "Explore how Node.js enables server-side JavaScript development.",
    reactions: 7,
    userId: '',
    tags: ["Node.js", "Backend"],
  },
  {
    id: Date.now() + 4,
    title: "Master SQL Databases",
    text: "Learn how to structure, query, and manage relational databases.",
    reactions: 4,
    userId: '',
    tags: ["SQL", "Database"],
  },
  {
    id: Date.now() + 5,
    title: "Get Started with MongoDB",
    text: "Learn how to store and retrieve data using a NoSQL database.",
    reactions: 6,
    userId: '',
    tags: ["MongoDB", "NoSQL"],
  }
];



export default PostListProvider ;

// [
//   {
//     "title": "Explore React",
//     "text": "Learn the fundamentals of React and build interactive UIs."
//   },
//   {
//     "title": "Master JavaScript",
//     "text": "Understand JavaScript deeply to improve your web development skills."
//   },
//   {
//     "title": "Database Management",
//     "text": "Learn SQL and NoSQL databases to store and manage data efficiently."
//   }
// ]
