import React, { Component } from 'react';
import '../pages/Home/style.css'

const Input = ({ type, placeholder, onChange, onBlur }) => {
  return (

        <input 
        type={type ? type : "text"}
        className="inputForm" 
        onChange={onChange}
        onBlur={onBlur}>
    </input>
  );
};

export default Input;
