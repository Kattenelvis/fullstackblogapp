import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogLink({blog}){ 

    const blogPreview = () =>{
        if (blog.body !== undefined){
            let splitBlog = blog.body.split('', 50);
            for (let i = 0; i < 40; i++) {
                if (splitBlog[i] === "<"){
                    
                    
                }
            }
        }
    }

    return(
    <div className="blogLink">
        <Link to={`blogs/${blog.id}`}><img src={blog.image} 
         alt=""></img>
        
        <h2>{blog.title}</h2> 
        <p>{blogPreview()}</p>
        <div className="likes">likes: {blog.likes}</div>
        </Link>
    </div>)
}