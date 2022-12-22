import React from "react";
import "./formInput.css";
import { Lang } from "../../lang/Lang";

export const FormInput = ({InputValue, lang}) => {
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
        <div className="d-flex gap-2 w-75">
          <input
            onChange={inputValue}
            value={inpuValue}
            className="hero-input w-100"
            type="search"
            placeholder={Lang[lang].search}
            name="search"
          />
        </div>
        <select  className="select" onChange={selectValue} value={secValue} name="country" id="country">
          <option>{Lang[lang].filter}</option>
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
