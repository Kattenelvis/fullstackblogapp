import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogLink({ blog }) {

	if (blog === undefined){
		throw console.error("Blog link is undefined")
	}
	else{
		return (
			<Link to={`blogs/${blog._id}`}>
				<div className="blogLink">
					<img src={blog.image} alt="" />
					<h2>{blog.title}</h2>
					<div className="likes">likes: {blog.likes}</div>
				</div>
			</Link>
		);
	}


}
