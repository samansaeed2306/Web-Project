
import {Route, Routes} from 'react-router-dom';

import Login from '../components/User/Login'
import GetUsers from '../components/User/GetUsers'
import CreateUser from '../components/User/CreateUser'
import AdminPage from '../components/Admin/AdminPage';



export default function Routers(){
    return(
        <Routes>
            {/* <Route path='/login' element={<Login/>}></Route> */}
            <Route path='/getUser' element={<GetUsers/>}></Route>
            <Route path='/createUser' element={<CreateUser/>}></Route>
            <Route path='/adminpage' element={<AdminPage/>}></Route>
            
        </Routes>
    )
}