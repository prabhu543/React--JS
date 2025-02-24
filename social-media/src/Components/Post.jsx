import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { PostListContext } from "../store/Posts-List-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext); // ✅ Fix: Use correct context

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {post.reactions}
          <span className="visually-hidden">unread messages</span>
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.text}</p>
        {post.tags.map((tag, index) => (
          <button type="button" className="btn btn-secondary tagBtn" key={index}>
            {tag}
          </button>
        ))}
        <div className="button">
          <MdDeleteOutline
            className="delete-icon"
            onClick={() => deletePost(post.id)} // ✅ Fix: Call deletePost onClick
            style={{ cursor: "pointer", position: "absolute", top: "10px", right: "10px", fontSize: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
