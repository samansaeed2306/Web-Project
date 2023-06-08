import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './createcourse.css';

const CreateCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
    price: ''
  });
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isInstructorValid, setIsInstructorValid] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateTitle = (title) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(title);
  };

  const checkInstructorIdExists = async (instructorId) => {
    // You can implement the logic to check if the instructor ID exists in the database
    // and return a boolean value accordingly.
    // Example: const exists = await instructorExistsInDatabase(instructorId);
    // Replace the following line with the actual implementation.
    const exists = true;
    return exists;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isTitleValid = validateTitle(formData.title);
    setIsTitleValid(isTitleValid);

    const instructorIdExists = await checkInstructorIdExists(formData.instructor);
    setIsInstructorValid(instructorIdExists);

    if (isTitleValid && instructorIdExists) {
      sendFormData(formData);
    }
  };

  const sendFormData = async (data) => {
  
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/course/createCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('CreateCourse successful');
        navigate('/course');
      } else {
        console.log('CreateCourse failed');
      }
    } catch (error) {
      console.error('Error sending form data from frontend:', error);
    }
  };

  return (
    <div>
      <div className="container bg-light justify-content-between align-items-center">
        <div className="row">
          <div className="col-md-6">
            <h2 className="pt-4">Create Course</h2>
            <form className="lead" onSubmit={handleSubmit}>
              <div className="mb-3" style={{ width: '250px' }}>
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className={`form-control ${!isTitleValid ? 'is-invalid' : ''}`}
                  id="title"
                  placeholder="Enter title"
                  onChange={handleChange}
                  value={formData.title}
                  name="title"
                />
                {!isTitleValid && (
                  <div className="invalid-feedback">Title should only contain letters and spaces.</div>
                )}
              </div>
              <div className="mb-3" style={{ width: '250px' }}>
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Enter description"
                  onChange={handleChange}
                  value={formData.description}
                  name="description"
                />
              </div>
              <div className="mb-3" style={{ width: '250px' }}>
                <label htmlFor="CreateCourseduration" className="form-label">
                  Duration:
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="CreateCourseduration"
                  aria-describedby="duration"
                  placeholder="Enter Duration"
                  value={formData.duration}
                  onChange={handleChange}
                  name="duration"
                />
              </div>
              <div className="mb-3" style={{ width: '250px' }}>
                <label htmlFor="CreateCourseInstructor" className="form-label">
                  Instructor ID:
                </label>
                <input
                  type="text"
                  className={`form-control ${!isInstructorValid ? 'is-invalid' : ''}`}
                  id="CreateCourseInstructor"
                  placeholder="Enter Instructor ID"
                  onChange={handleChange}
                  value={formData.instructor}
                  name="instructor"
                />

                {!isInstructorValid && (
                  <div className="invalid-feedback">Invalid Instructor ID.</div>
                )}
                
              </div>
              <div className="mb-3" style={{ width: '250px' }}>
                <label htmlFor="CreateCourseprice" className="form-label">
                  Course Price:
                </label>
                <input
                  type="Number"
                  className="form-control"
                  id="CreateCoursePrice"
                  placeholder="Enter Price"
                  onChange={handleChange}
                  value={formData.price}
                  name="price"
                />
              </div>
              <div className="btn-container">
                <button type="submit" className="btn">
                  Create Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
