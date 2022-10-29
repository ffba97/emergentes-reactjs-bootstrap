import React from "react";

const StudentsList = (props) => {
  const list = props.list;
  const onDelete = props.onDelete;
  const onEdit = props.onEdit;
  const dark = props.actualMode;

  const handleDeleteClick = (student) => {
    let c = window.confirm("estas seguro?");
    return c ? onDelete(student) : "";
  };

  const handleEditClick = (student) => {
    onEdit(student);
  };

  const CrearTabla = () => {
    return (
      <div className="col-md-9 m-0">
        <table className={dark==='checked'?"table table-dark":"table"}>
          <thead>
            <tr>
              <th cla>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Carrera</th>
              <th>Activo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {list.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.carreer}</td>
                <td>{student.is_active ? "Activo" : "Inactivo"}</td>
                <td>
                  <button
                    className="btn btn-primary mx-1"
                    onClick={() => handleEditClick(student)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleDeleteClick(student)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return <>
  {list.length > 0 ? <CrearTabla /> : ""}</>;
};

export default StudentsList;
