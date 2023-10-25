import {useState } from 'react'
import { useGetUserbyNameQuery } from './store/UserApi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import store from './store/store'
import { actions } from './store/User.slice'


function App() {
  const [value, setValue] = useState("github")
 
  const {data, isLoading, error, isError} = 
  useGetUserbyNameQuery(value)
console.log(localStorage)
  const userData = useSelector(state => state.slice) 
  const dispatch = useDispatch()


  const getDataUser = (e) => {
e.preventDefault()
    if(!isError){
      console.log(data)
dispatch(actions.UserData(data))
console.log(userData)
}
}
  

return (

    <div>
      <div className='flex mb-1'>
        <input placeholder='search'
        className='text-center w-full rounded-sm h-11 border-none outline-none' 
        type="text" 
        value={value} 
        onChange={e => setValue(e.target.value)}/>
        <Link
        to="/user"
        onClick={e => getDataUser(e)}
        className='bg-slate-900 rounded-md px-3 py-2 text-gray-50 '>
          full view
          </Link>
      </div>

          {error?.status === 404 ?
          <h1 className='text-3xl text-red-600'>
            not found user
            </h1> 
            :isLoading?<h1>loading</h1>
            : 
          [data]?.map((item)=>{
          return(
          <div key={item.id} className='flex justify-center items-center flex-col'>
            <img 
            src={item.avatar_url}
             alt="avatar"
             className='w-[20%] rounded-full'/>
            <h1>
              {item.name}
              </h1>
            <Link to={item.blog}>
              {item.blog}
              </Link>
          </div>
          )
          })}
    </div>
  )
}

export default App
