import { Link } from "react-router-dom"
import Layout from "../../Layout/Layout"

const Home = (props) =>{
return (
 <div className="flex flex-col justify-center items-center h-full">
    <h1>thats search gitHub BaseData</h1>
    <h1 className="w-[70%] mb-3">if you want to start then press the button</h1>
    <Link className="px-3 text-fuchsia-50 py-2 bg-gray-800 rounded-md" to="/search">start</Link>
 </div>
)
}
export default Home