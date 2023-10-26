import { Link } from "react-router-dom"


const History = () => {
  
    
 return Object.keys(localStorage).map((item, index) => {
    const id = JSON.parse(item)
    const users = JSON.parse(localStorage.getItem(id))
    console.log(users)
    return (
        <div
        key={id}
        className="flex border-[1px] border-b-black py-2 justify-between items-center">
    <p>{users.login}</p>
    <p>{
    users.bio?
    users.bio: "not found" 
}</p>
<Link reloadDocument onClick={()=>localStorage.removeItem(id)}>delete</Link>
    </div>
    )    
    
})
}
export default History