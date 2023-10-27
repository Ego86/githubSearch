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
    <div key={item.id} className='md:flex block'>
    <img src={item.avatar_url} width={"33%"} className='shadow-teal-950 md:mb-3'></img>
        <div className='text-gray-700 p-3  md:block flex justify-center items-center flex-col'>
        <h1>userName: {item.name? item.name: "empty"}</h1>
        <h1>followers: {item.followers? item.followers : "empty"}</h1>
        <h1>bio: {item.bio}</h1>
        <h1>location: {item.location? item.location : "empty"}</h1>
        <h1>repository: {item.public_repos}</h1>
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