import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogLink({blog}){ 
    return(
    <div style={{ marginBottom: "20px" }}>
        <Link to={`blogs/${blog.id}`}>{blog.title} likes: {blog.likes}</Link> <br />
    </div>)
}