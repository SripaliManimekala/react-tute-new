import { useState,useEffect } from 'react'; 
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);

    const [name,setName] = useState('Chopper');

    const handleDelete=(id)=>{
        // return a new filtered array without deteled item 
        const newBlogs = blogs.filter((blog)=>blog.id!==id);
        setBlogs(newBlogs);
    }
    //this hook runs every time there is a re-render
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
           return res.json();
        })
        .then(data=>{
            console.log(data);
            setBlogs(data);
        })
    },[]);

    return ( 
        <div className="home">
            {/* taking all blogs in */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;