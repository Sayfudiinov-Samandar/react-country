import React from "react";
import "./formInput.css";

export const FormInput = (InputValue) => {
  const [inpuValue, setInpValue] = React.useState("");
  const [secValue, setSecValue] = React.useState("");


  const inputValue = (props) => {
    setInpValue(props.target.value)
};
  const selectValue =(props)=>{
    setSecValue(props.target.value)
    InputValue.GetSelectValue(props.target.value)
  }
  

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          InputValue.GetInputValue(inpuValue)
        }}
        className="form"
        autoComplete="off">
        <div className="d-flex gap-2">
          <input
            onChange={inputValue}
            value={inpuValue}
            className="hero-input"
            type="search"
            placeholder="Search for a country…"
            name="search"
          />
        </div>
        <select  className="select" onChange={selectValue} value={secValue} name="country" id="country">
          <option>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </>
  );
};
