import { Link } from "react-router-dom"

const Header = () =>{
    return (
    <Link to="/" 
    reloadDocument 
    className="text-center text-lg text-red-100 p-3">
        GitHubSearch
    </Link>
)
}
export default Header