import React from 'react';

const StudentList = ({ students }) => {
  return (
    <ul className="student-list">
      {students.map(student => (
        <li key={student.id}>
          {student.firstName} {student.lastName}
        </li>
      ))}
    </ul>

  );
};


export default StudentList;
