import { Outlet} from "react-router-dom"
import NavBar from "../assets/ui/NavBar/NavBar"
import Header from "../assets/ui/Header/Header"

const Layout = (props) =>{
    
return (    
<div className="bg-slate-800 h-screen overflow-hidden text-center ">
<Header/>
       <div className=' h-screen flex justify-center items-center flex-col'>
           <NavBar />
<section 
className="p-1 overflow-auto bg-red-100 w-[33%] h-[50%]">
            <Outlet /> 
</section>
    
    </div>
    
</div>
)
}
export default Layout