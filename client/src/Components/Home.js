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

    return <div>
        <div><BlogLink key={topRated[0].id} blog={topRated[0]}/></div>
        <div>{topRated[1].title}</div>
        <div>{topRated[2].title}</div>
    </div>;
  };