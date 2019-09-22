import React,{useState} from 'react'
import Axios from 'axios';
import BlogLink from './BlogLink'

const baseURL = "http://localhost:5000/api/blogposts/";

export default function Home  ()  {
    
    let [topRated, setTopRated] = useState([{},{},{}])
    
    const getTopRated = async () =>{
        let data = await Axios.get(baseURL).then(res => {return res.data})
        
        data.sort((a,b) => (a.likes > b.likes) ? -1 : 1)
        setTopRated(data);
    }
    getTopRated();

    return <div className="blogList">
        <h1>HOT BLOGS</h1>
        <div className="blogs">
            <div><BlogLink blog={topRated[0] || {}}/></div>
            <div><BlogLink blog={topRated[1] || {}}/></div>
            <div><BlogLink blog={topRated[2] || {}}/></div>
        </div>
    </div>
  };