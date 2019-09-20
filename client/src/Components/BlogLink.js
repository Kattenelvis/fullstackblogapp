import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogLink({blog}){ 
    return(
    <div className="blogLink">
        <Link to={`blogs/${blog.id}`}><img src={blog.image} 
         alt=""></img>
        
        <h2>{blog.title}</h2> 
        <div className="likes">likes: {blog.likes}</div>
        </Link>
    </div>)
}