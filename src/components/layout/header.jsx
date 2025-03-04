 
import  './header.css'
const Header = () => {
    return (
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/Products">Products</a></li>
        </ul>
    )
}
export default Header