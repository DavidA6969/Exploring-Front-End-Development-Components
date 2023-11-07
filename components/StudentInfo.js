import React from 'react';

const StudentInfo = ({ student }) => {
  return (
    <div className="student-info">
      <h2>Student Information</h2>
      <p>
        <strong>Name:</strong> {student.firstName} {student.lastName}
      </p>
      <p>
        <strong>Date of Birth:</strong> {student.dateOfBirth}
      </p>
      <p>
        <strong>Grade:</strong> {student.grade}
      </p>
    </div>
  );
};

export default StudentInfo;
