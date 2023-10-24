import { render } from "react-dom"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const User = (data = []) =>{

const userData = useSelector(state => state.slice) 
console.log(userData)
return (
    <div>
        {
            userData?.map(item => {
    return ( 
    <div key={item.id} className='flex'>
    <img src={item.avatar_url} width={"33%"} className='shadow-teal-950'></img>
        <div className='text-gray-700'>
        <h1>userName: {item.name}</h1>
        <h1>followers: {item.followers}</h1>
        <h1>bio: {item.bio}</h1>
        <Link to={item.blog? item.blog : "/user"}>blog: {item.blog? item.blog: "empty"}</Link>
        </div>
        </div>
        )
        })
    }
    </div>
    )
}
export default User
    /* <div>
        <h1 className="text-red-200 p-4 font-mono">
            {`Если ты боишься сделать ошибку то знай,`}
            <br/>
            <h2 className="text-red-500 p-10 font-bold">
                Ошибки не делает только мёртвый.</h2>
                </h1>
                </div> */