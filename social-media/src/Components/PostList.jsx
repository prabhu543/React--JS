import { useContext } from "react";
import { PostListContext } from "../store/Posts-List-store";
import WelcomeMsg from "./WelcomeMsg";
import Post from "./Post";

const PostList = () => {
  const { postList, addServerPosts } = useContext(PostListContext);

  const onGetPost = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addServerPosts(data.posts);
    });
  };

  return (
    <div className="post-list">
      {postList.length === 0 && <WelcomeMsg onGetPost={onGetPost} />}
      {postList.map((post, index) => (
        <Post key={post.id + index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
