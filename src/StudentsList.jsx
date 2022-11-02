import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const StudentsList = (props) => {
  const list = props.list;
  const onDelete = props.onDelete;
  const onEdit = props.onEdit;
  const dark = props.actualMode;

  const handleDeleteClick = (student) => {
    let c = window.confirm("Estas seguro que deseas eliminar?");
    return c ? onDelete(student) : "";
  };

  const handleEditClick = (student) => {
    onEdit(student);
  };

  const CrearTabla = () => {
    return (
      <div className="col-md-9 m-0">
        <table className={dark === "checked" ? "table table-dark" : "table"}>
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
                <td className="align-middle">{student.id}</td>
                <td className="align-middle">{student.first_name}</td>
                <td className="align-middle">{student.last_name}</td>
                <td className="align-middle">{student.carreer}</td>
                <td className="align-middle">{student.is_active ? <span className="text-success"><FaCheck/> Activo</span> : <span className="text-danger"><FaTimes/> Inactivo</span>}</td>
                <td>
                  <button
                    className="btn btn-primary mx-1"
                    onClick={() => handleEditClick(student)}
                  >
                    <FaEdit /> Editar
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleDeleteClick(student)}
                  >
                    <FaTrashAlt /> Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return <>{list.length > 0 ? <CrearTabla /> : ""}</>;
};

export default StudentsList;
