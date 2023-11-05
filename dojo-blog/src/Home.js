import { useState,useEffect } from 'react'; 
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);

    // const [name,setName] = useState('Chopper');

    const handleDelete=(id)=>{
        // return a new filtered array without deteled item 
        const newBlogs = blogs.filter((blog)=>blog.id!==id);
        setBlogs(newBlogs);
    }
    //this hook runs every time there is a re-render
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')//get request to this end point
        .then(res=>{//this return a promise(async code)
           return res.json();
        })
        .then(data=>{//after above res.json is coplete this will happen,also async
            // console.log(data);//console the response data
            setBlogs(data);
        })
    },[]);

    return ( 
        <div className="home">
            {/* taking all blogs in */}
            {/* li dynamic check bcz 1st null blogs are loaed it takes some time to load the blogs */}
            {/* this is some js..so we put curly braces */}
            {/* check 1st if left is true,if flase dont even bother with write and 1st blogs is null and null evaluates to false */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;