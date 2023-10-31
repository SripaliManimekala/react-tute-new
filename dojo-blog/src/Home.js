const Home = () => {

    const handleClick = (e) => {
        console.log('hello moda siripali',e);
    }

    const handleClickAgain = (name, e) =>{
        console.log('hi '+name, e.target);
    }

    return ( 
        <div className="home">
            <h1>this is home page</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={(e)=>handleClickAgain('chamod',e)}>click me again</button>
        </div>
     );
}
 
export default Home;