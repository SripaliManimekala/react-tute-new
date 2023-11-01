import { useState } from 'react'; 

const Home = () => {
    //let name='mario';
    const [name,setName] = useState('mario');
    const handleClick = () => {
        setName('luffy');
    }

    const handleClickAgain = (name, e) =>{
        console.log('hi '+name, e.target);
    }

    return ( 
        <div className="home">
            <h1>this is home page</h1>
            <p>{name}</p>
            <button onClick={handleClick}>click me</button>
        </div>
     );
}
 
export default Home;