
import {Route, Routes} from 'react-router-dom';

import Login from '../components/User/Login'
import GetUsers from '../components/User/GetUsers'
import CreateUser from '../components/User/CreateUser'
import AdminPage from '../components/Admin/AdminPage';
import UserAnalytics from '../components/User/UserAnalytics'
import CreateCourse from '../components/Course/CreateCourse';
import UpdateCourse from '../components/Course/UpdateCourse';
import CoursePage from '../components/Course/CoursePage';
import Courses from '../components/Course/Courses'




export default function Routers(){
    return(
        <Routes>
            {/* <Route path='/login' element={<Login/>}></Route> */}
            <Route path='/getUser' element={<GetUsers/>}></Route>
            <Route path='/createUser' element={<CreateUser/>}></Route>
            <Route path='/adminpage' element={<AdminPage/>}></Route>
            <Route path='/userAnalytics' element={<UserAnalytics/>}></Route>
            <Route exact path="/course" element={<Courses/>}/>
            <Route  path="/coursePage/:courseId" element={<CoursePage/>} />
            <Route  path="/createCourse" element={<CreateCourse/>} />
            <Route  path="/updateCourse/:courseId" element={<UpdateCourse/>} />
        </Routes>
            
     
    )
}