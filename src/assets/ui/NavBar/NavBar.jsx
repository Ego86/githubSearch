import { Link, useLocation, useNavigation } from "react-router-dom"
import styles from "./NavBar.module.css"
import { useMemo } from "react"
const path = location.pathname

const NavBar = (props) =>{
 const location = useLocation()
const path = location.pathname
return (
    <div className="m-8">
        <Link 
        to="/"
        className={`${styles.btn} ${path === "/" ?styles.active: ""}`}>
            Home
        </Link>
        <a 
        href="/search"
        className={`${styles.btn} ${path === "/search" ?styles.active: ""}`}>
            Search
        </a>
        <Link 
        to="user"
        className={`${styles.btn} ${path === "/user" ?styles.active: "" }`}>
            User
        </Link>
        <Link 
        to="history"
        className={`${styles.btn} ${path === "/history" ?styles.active: ""}`}>
            History
        </Link>
    </div>
)
}
export default NavBar