import React from 'react';
import { ErrorMessage, Field } from "formik";
import './InputElement.scss';

export default function InputElement({
  labelName,
  type,
  value,
  fieldName,
  errors,
  handleChange
}) {
  return (
    <div className="input-wrapper">
      <div className="label">
        <label htmlFor="">{labelName}</label>
      </div>
      <Field
        type={type}
        name={fieldName}
        value={value}
        onKeyUp={handleChange}
        className={Object.keys(errors).length !== 0 && !value ? 'error-input' : ''}
      />
      <ErrorMessage name={fieldName} component="div" className="error" />
    </div>
  );
}
