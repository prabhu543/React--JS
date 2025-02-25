import { createContext, useReducer } from "react";

// ✅ Create the Context
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addServerPosts : ()=>{},
  deletePost: () => {},
});

// ✅ Reducer function
const postReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload , ...currentPostList];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload.postId);
    case "ADD_SERVER_POST":
      return [...action.payload.posts];
    default:
      return currentPostList;
  }
};


const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postReducer, []);

  const addServerPosts = (posts) => {
    dispatchPostList({
      type: "ADD_SERVER_POST",
      payload: { 
        posts
      },
    });
  };

  const addPost = (userId, title, content, reactions, hashTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { 
        id: Date.now() + 1,
        title,
        text: content,
        reactions,
        userId,
        tags: hashTags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost,  addServerPosts ,deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
