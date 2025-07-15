// src/components/atoms/Textarea.jsx (If you have this file)
import React, { Component } from 'react';

class Textarea extends Component {
  static defaultProps = {
    value: '',
    name: '',
    placeholder: '',
    disabled: false,
    readOnly: false,
    onChange: () => {},
    rows: 5,
    className: '' // Prop to allow external classes
  };

  render() {
    const { value, name, placeholder, disabled, readOnly, onChange, rows, className } = this.props;

    return (
      <textarea
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        rows={rows}
        className={`block w-full px-4 py-2 mt-1 text-sky-800 bg-white border border-sky-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:ring-opacity-50 transition duration-150 ease-in-out resize-none ${className}`}
      ></textarea>
    );
  }
}

export default Textarea;