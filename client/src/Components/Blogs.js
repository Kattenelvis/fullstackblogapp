import React, { useState, useEffect } from 'react';
import BlogLink from './BlogLink';

export default function Blogs() {
	const [ blogs, setBlogs ] = useState([]);
	const getData = async () => {
		const data = await fetch('http://localhost:5000/api/blogposts');
		const blogs = await data.json();
		setBlogs(blogs);

	};
	
	useEffect(() => {
		getData();
		
	}, []);

	return (
		<div className="blogList">
			<h1>ALL BLOGS</h1>
			<div className="blogs">
				<div>
					{blogs.map((blog) => {
						return <BlogLink blog={blog} key={blog._id} />;
					})}
				</div>
			</div>
		</div>
	);
}
