'use client'
import React from 'react';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import StudentInfo from './components/StudentInfo';
import StudentForm from './components/StudentForm';
import studentsData from './components/students.json';


const Home = () => {
  const [students, setStudents] = React.useState(studentsData);
  const [selectedStudent, setSelectedStudent] = React.useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };


  
  const handleAddStudent = (newStudent) => {
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
  };
  
  return (
    <div className="container">
      <Navbar />
      <StudentList students={students} onSelectStudent={handleSelectStudent} />
      <StudentForm onAddStudent={handleAddStudent} />
      {selectedStudent && <StudentInfo student={selectedStudent} />}
      <Footer />
    </div>
  );
};

export default Home;

