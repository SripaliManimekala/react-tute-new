import { useState,useEffect } from 'react'; 
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState([
        // each object represent a single blogs.
        {id:1 , title:"First Blog", body:"This is the first blog",author:'momonuske'},
        {id:2 , title:"Second Blog", body:"This is the second blog",author:'shanks'},
        {id:3 , title:"Third Blog", body:"This is the third blog",author:'momonuske'}
    ]);

    const [name,setName] = useState('Chopper');

    const handleDelete=(id)=>{
        // return a new filtered array without deteled item 
        const newBlogs = blogs.filter((blog)=>blog.id!==id);
        setBlogs(newBlogs);
    }
    //this hook runs every time there is a re-render
    useEffect(()=>{
        console.log('use effect hook ran');
        console.log(blogs);
    },[name]);

    return ( 
        <div className="home">
            {/* taking all blogs in */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={()=>setName('Jimbei')}>Change name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;