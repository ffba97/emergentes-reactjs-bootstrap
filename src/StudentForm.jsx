import { getQueriesForElement } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import CARREERS from "./carreers";

const StudentForm = (props) => {
  const [formValues, setFormValues] = useState(props.initialStudent);
  const dark = props.actualMode;

  useEffect(() => {
    setFormValues(props.initialStudent);
  }, [props.initialStudent]);

  const validar = () => {
    let name = document.querySelector('[name="first_name"]');
    let lastName = document.querySelector('[name="last_name"]');
    let valido = true;
    let alert = document.querySelector(".alert");
    
    name.classList.remove('border-danger');
    lastName.classList.remove('border-danger');
    alert.classList.remove('d-none');



    if (formValues.first_name.length === 0) {
      name.classList.add("border-danger");
      valido =false;
    }

    if (formValues.last_name.length === 0) {
      lastName.classList.add("border-danger");
      valido = false
    } 

    if(valido){
        alert.classList.add('d-none')
    }

    return valido;
  };

  const handleChange = (event) => {
    // Obtener la referencia al input
    const target = event.target;
    // Obtener el nombre del input
    const name = target.name;
    // Obtener el nuevo valor del input
    const newValue = target.type === "checkbox" ? target.checked : target.value;
    // Generar los nuevos valores del formulario
    const newFormValues = {
      ...formValues,
      [name]: newValue,
    };
    // Actualizar los valores del formulario en el estado
    setFormValues(newFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valido = validar();
    if (valido) {
      props.onSave(formValues);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setFormValues(props.initialStudent);
    props.onCancel();
  };

  return (
    <>
      <form className="col-md-3 p-4" onSubmit={handleSubmit}>
        
        <div className="form-group my-2">
          <label htmlFor="first_name">Nombre:</label>
          <input
            className={dark==='checked'?"mx-3 form-control bg-dark text-white":"mx-3 form-control"}
            placeholder="Introduce el nombre"
            type="text"
            name="first_name"
            value={formValues.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="last_name">Apellido:</label>
          <input
            className={dark==='checked'?"mx-3 form-control bg-dark text-white":"mx-3 form-control"}
            placeholder="Introduce el apellido"
            type="text"
            name="last_name"
            value={formValues.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input "
            
            name="is_active"
            checked={formValues.is_active}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="is_active">
            Activo
          </label>
        </div>
        <div>
          <label htmlFor="carreer">Carrera:</label>
          <select
            className="mx-3 form-select"
            name="carreer"
            value={formValues.carreer}
            onChange={handleChange}
          >
            {CARREERS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3">
          <input className="btn btn-primary" type="submit" value="Guardar" />
          <button className={dark==='checked'?'btn text-white':"btn btn-default"} onClick={handleCancel}>
            Cancelar
          </button>
          <div className="alert alert-danger my-2 d-none">
          Todos los campos deben ser completados
        </div>
        </div>
      </form>
    </>
  );
};

export default StudentForm;
