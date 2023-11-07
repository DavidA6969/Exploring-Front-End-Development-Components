import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    grade: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform data validation here if needed
    onAddStudent(formData);
    // Reset the form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      grade: '',
    });
  };

  return (
    <div className="student-form">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Grade:
          <input
            type="number"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
