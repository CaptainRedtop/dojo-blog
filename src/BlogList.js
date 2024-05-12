import { Link } from "react-router-dom";

// Using props to get data fra Home.js. Doing so, will make this usable to multiple times. 
const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                </Link>
            </div>
        ))}
        </div>
    );
}
 
export default BlogList;