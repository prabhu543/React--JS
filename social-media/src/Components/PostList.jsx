import { useContext , useEffect, useState } from "react";
import { PostListContext } from "../store/Posts-List-store";
import WelcomeMsg from "./WelcomeMsg";
import Post from "./Post";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addServerPosts } = useContext(PostListContext);
  const [fetched , setFetched] = useState(false);

useEffect(()=>{
    setFetched(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts' , {signal})
    .then(res => res.json())
    .then(data => {
      addServerPosts(data.posts);
      setFetched(false);
    });

    return ()=>{
      console.log("clean up")
      controller.abort();
    }
},[])
    

  return (
    <div className="post-list">
      {fetched && <LoadingSpinner />}
      {!fetched && postList.length === 0 && <WelcomeMsg />}
      {!fetched && postList.map((post, index) => (
      <Post key={post.id + index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
