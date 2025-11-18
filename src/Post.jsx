import { useState,useEffect } from "react";

 function Post() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/posts')
   .then((data)=>data.json())
   .then((data=> setPosts(data)))
   .catch(err=> console.log(err))
  },[]);

 
  return (

    <div className='d-flex justify-content-center'>
      {posts.length>0?(
       // console.log(post)
       <div> {posts.map((post)=>
       (
       <div className="my-3" key={post.id}>
        <div className="d-flex" >
          <div  className="image" img="" alt="profile"></div>
          <p>{post.user.username}
            </p>

        </div>
        <img  className="post"src={post.image}></img>
       <div>
        <i className="bi bi-heart"></i>
        <i className="bi bi-chat-left-text"></i>
        <i className="bi bi-send"></i>
       </div>
       <div>
          <b> {post.likes}</b>
       </div>
      <div>
        <p >{post.caption}</p>
      </div>
       </div>
       ))}
       </div>
        
        
      ):
      (
        <div>
          Loading.....
        </div>
      )
    }
    </div>
  );
}
export default Post
   