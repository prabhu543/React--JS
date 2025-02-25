// import React from 'react'
import { useContext } from 'react'
import { PostListContext } from "../store/Posts-List-store";
import { useRef } from "react";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext) ;

  const postUserId = useRef("");
  const postTitle = useRef("");
  const postContent = useRef("");
  const postReactions = useRef("");
  const postHashTags = useRef("");

  const handleSubmit =(event)=>{
    event.preventDefault();
    const userId = postUserId.current.value;
    const title = postTitle.current.value;
    const content = postContent.current.value;
    const reactions = postReactions.current.value;
    const hashTags = postHashTags.current.value.split(",");

    addPost(userId, title, content, reactions, hashTags);
    postUserId.current.value = "";
    postTitle.current.value = "";
    postContent.current.value = "";
    postReactions.current.value = "";
    postHashTags.current.value = "";
}

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id</label>
    <input 
    type="text" 
    className="form-control" 
    id="userId" 
    placeholder="Your user id"
    ref={postUserId}
    required 
    />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" placeholder="How are you feeling today?"
    ref={postTitle}
    // value={postTitle.current}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" className="form-control" rows="4" id="body"placeholder="Tell us more about it..."
    ref={postContent}
    // value={postContent.current}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input type="number" className="form-control" id="reactions" placeholder="How many reactions?"
    ref={postReactions}
    // value={postReactions.current}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Related Hashtags</label>
    <input type="text" className="form-control" id="tags" placeholder="Please add your hashtags (separated by comma)"
    ref={postHashTags}
    // value={postHashTags.current}
    />
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost;
