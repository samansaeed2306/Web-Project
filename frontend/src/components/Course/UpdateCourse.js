import React, { useState } from 'react';
//import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateCourse = () => {
  const {  courseId } = useParams();
 const  navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        instructor: '',
        duration: '',
        price: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit =  (e) => {
        e.preventDefault();
       sendFormData(formData);
        };
      const sendFormData = async (data) => {
        try {
         // const duration = data.duration
          const response = await fetch(`http://localhost:5000/course/updateCourse/${courseId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          // Handle the response from the backend
          if (response.ok) {
            // CreateCourse successful
            console.log('Update Course successful');
           // navigate('/');
           window.alert("Course updated SUCCESSFULLY");
          } else {
            // CreateCourse failed
            console.log('CreateCourse failed');
            window.alert("Course updation FAILED");
          }
        } catch (error) {
          console.error('Error sending form data from frontend', error);
        }
      };
    return (
        <div>
<div className="container bg-light justify-content-between align-items-center">
    <div className="" style={{width:'100%'}}>
<div className="col-md-6" style={{width:'100%'}}>
    <h2 className="pt-4">Update Course</h2>
    <form className="lead" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title:</label>
        <input  type="text" className="form-control" id="title" placeholder="Enter title" onChange={handleChange} value={formData.title} name="title" />
      </div>
      <div className="mb-3 ">
        <label htmlFor="description" className="form-label">Description:</label>
        <input type="text" className="form-control" id="description" placeholder="Enter description" onChange={handleChange} value={formData.description} name="description"/>
      </div>
      <div className="mb-3">
        <label htmlFor="CreateCourseduration" className="form-label">Duration: </label>
        <input type="Number" className="form-control" id="CreateCourseduration" aria-describedby="duration"
         placeholder="Enter Duration" value={formData.duration} onChange={handleChange} name="duration" />
        
      </div>
      <div className="mb-3">
        <label htmlFor="CreateCourseInstructor" className="form-label">Instructor id:</label>
        <input type="text" className="form-control" id="CreateCourseInstructor" placeholder="Enter Instructor id" 
        onChange={handleChange} value={formData.instructor} name="instructor"/>
      </div>
      <div className="mb-3">
        <label htmlFor="CreateCourseprice" className="form-label">Course Price:</label>
        <input type="Number" className="form-control" id="CreateCoursePrice" placeholder="Enter Price" 
        onChange={handleChange} value={formData.price} name="price"/>
      </div>
      <button type="submit" className="btn btn-warning">Update Course</button>
    </form>
  </div>
</div>
</div>        </div>
    )
}
export default UpdateCourse;