import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    //Using logical and (&&) to test if blogs is true or false. If false, don't run the next code.
    //Making a loading div to show user until the data is fetch from the server.
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs &&<BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;