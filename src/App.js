import React, { useEffect, useState } from "react";
import Box from "./Box";
import StudentForm from "./StudentForm";
import StudentsList from "./StudentsList";
import DarkMode from "./DarkMode";

const App = () => {
  const [students, setStudents] = useState([]);
  const [studentOnEdit, setStudentOnEdit] = useState(undefined);
  const [dark, setDark] = useState(localStorage.getItem("dark"));

  useEffect(() => {
    const mode = localStorage.getItem("dark");
    if (mode) {
      handleDarkMode(mode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);

  const handleDarkMode = (mode) => {
    setDark(mode);
  };

  const handleAddStudent = (student) => {
    const newStudent = {
      ...student,
      id: Math.round(Math.random() * 999999999),
    };
    setStudents([...students, newStudent]);
  };

  const handleUpdateStudent = (student) => {
    const studentId = studentOnEdit.id;
    const newStudent = {
      ...student,
      id: studentOnEdit.id,
    };
    const newStudents = students.map((s) =>
      s.id === studentId ? newStudent : s
    );
    setStudents(newStudents);
  };

  const handleSaveStudent = (student) => {
    if (studentOnEdit) {
      handleUpdateStudent(student);
      setStudentOnEdit(undefined);
    } else {
      handleAddStudent(student);
    }
  };

  const handleDeleteStudent = (student) => {
    const studentId = student.id;
    const newStudents = students.filter((s) => s.id !== studentId);
    setStudents(newStudents);
  };

  const handleEditStudent = (student) => {
    setStudentOnEdit(student);
  };

  const handleCancel = () => {
    setStudentOnEdit(undefined);
  };

  const initialStudent = studentOnEdit ?? {
    first_name: "",
    last_name: "",
    carreer: "informatica",
    is_active: true,
  };

  return (
    <>
      <div className="container my-4">
        <DarkMode changeMode={handleDarkMode} actualMode={dark} />
      </div>
      <Box>
        <StudentForm
          onSave={handleSaveStudent}
          initialStudent={initialStudent}
          onCancel={handleCancel}
          actualMode={dark}
        />
        <StudentsList
          list={students}
          onDelete={handleDeleteStudent}
          onEdit={handleEditStudent}
          actualMode={dark}
        />
      </Box>
    </>
  );
};

export default App;
