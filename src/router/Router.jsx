import App from "../App"
import { BrowserRouter, Route, Routes, useNavigation } from "react-router-dom"
import Home from "../page/Home/Home"
import Layout from "../Layout/Layout"
import User from "../page/User/User"
import History from "../page/History/History"
const Router = (props) =>{
return (
    <>
{
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path='/search' element={<App />}/>
        <Route path='/user' element={<User />}/>
        <Route path='/history' element={<History />}/>
        <Route path="*" errorElement={<h1>Error</h1>}/>
        </Route>
    </Routes>
</BrowserRouter>
}
</>
)
}
export default Router