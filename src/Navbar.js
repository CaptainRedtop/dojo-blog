import { Link }  from 'react-router-dom';

//Naviation bar for the page. 
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Drama Planet</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">New Drama</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;  