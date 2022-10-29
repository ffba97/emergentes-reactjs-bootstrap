import React, { useEffect } from "react";

const DarkMode = (props) => {
  const changeMode = props.changeMode;
  const dark = props.actualMode;

  const body = ()=>{
    if(dark==="checked"){
      document.body.classList.add('bg-dark','text-white')
    }else{
      document.body.classList.remove('bg-dark','text-white')
    } 
  }

  const handleChangeMode = () => {
    dark === "checked" ? props.changeMode("") : props.changeMode("checked");
  };

  if (dark === "checked") {
    return (
      <div className="form-check form-switch">
        {body()}
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onChange={handleChangeMode}
          checked
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          Dark Mode
        </label>
      </div>
    );
  } else {
    return (
      <div className="form-check form-switch">
        {body()}
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={handleChangeMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
      </div>
    );
  }
};

export default DarkMode;
