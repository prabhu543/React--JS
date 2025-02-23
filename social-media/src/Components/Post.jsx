// import React from 'react'

const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
  {/* <img src="..." className="card-img-top" alt="...">  */} {/* You can add an image here if needed  */}
  <div className="card-body">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{post.reactions}<span className="visually-hidden">unread messages</span>
  </span>
  <h5 className="card-title">{post.title}</h5>
  <p className="card-text">{post.text}</p>
  {post.tags.map((tag,index) => {
    return (<button type="button" className="btn btn-secondary tagBtn" key={index}>{tag}</button>);
  })}
</div>

</div>
  )
}

export default Post
