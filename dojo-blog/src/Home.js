import { useState } from 'react'; 
import BlogList from './BlogList';

const Home = () => {

    const[likes,setLikes] = useState(0);

    const [blogs,setBlogs] = useState([
        // each object represent a single blogs.
        {id:1 , title:"First Blog", body:"This is the first blog",author:'momonuske'},
        {id:2 , title:"Second Blog", body:"This is the second blog",author:'shanks'},
        {id:3 , title:"Third Blog", body:"This is the third blog",author:'momonuske'}
    ]);

    const handleDelete=(id)=>{
        // return a new filtered array without deteled item 
        const newBlogs = blogs.filter((blog)=>blog.id!==id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {/* taking all blogs in */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='momonuske')} title="Momonuske's Blogs"/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='shanks')} title="Shanks's Blogs"/>
        </div>
     );
}
 
export default Home;