import { useState } from 'react'; 

const Home = () => {

    const[likes,setLikes] = useState(0);

    const handleCLick =()=>{
        setLikes(likes+1);
    }

    const [blogs,setBlogs] = useState([
        // each object represent a single blogs.
        {id:1 , title:"First Blog", body:"This is the first blog",author:'zoro'},
        {id:2 , title:"Second Blog", body:"This is the second blog",author:'shanks'},
        {id:3 , title:"Third Blog", body:"This is the third blog",author:'momonuske'}
    ]);

    return ( 
        <div className="home">
            <h1>total likes { likes } </h1>
            <button onClick={handleCLick}>like us</button>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;