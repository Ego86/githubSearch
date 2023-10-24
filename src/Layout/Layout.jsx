import { Outlet} from "react-router-dom"
import NavBar from "../assets/ui/NavBar/NavBar"

const Layout = (props) =>{
    
return (
       <div className='bg-slate-800 h-screen flex justify-center items-center flex-col'>
           <NavBar />
<section 
className="p-1 bg-red-100 w-[33%] h-[50%]">
            <Outlet /> 
</section>
    
    </div>
    
)
}
export default Layout