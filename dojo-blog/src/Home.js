import { useState,useEffect } from 'react'; 
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);

    //this hook runs every time there is a re-render
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')//get request to this end point
            .then(res=>{//this return a promise(async code)
               return res.json();
            })
            .then(data=>{//after above res.json is coplete this will happen,also async
                // console.log(data);//console the response data
                setBlogs(data);
                setIsPending(false);
            })
        },1000)
    },[]);

    return ( 
        <div className="home">
            {isPending&& <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;