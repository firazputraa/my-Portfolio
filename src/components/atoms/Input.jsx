import React, {Component} from 'react';

class Input extends Component{
  static defaultProps = {
    type: 'text',
    value: '',
    name: '',
    placeholder: '',
    disabled: false,
    readOnly: false,
    onChange: () => {},
    className: ''
  };
  render(){
    const {type,value,name,placeholder,disabled,readOnly,onChange,className} = this.props;

    return(
      <input
        type= {type}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        className={`block w-full px-4 py-2 mt-1 text-gray-800 bg-white border border-sky-300 rounded-md shadow-sm focus:outline-none focus:border-sky-50 focus:ring-2 focus:ring-sky-200 focus:ring-opacity-50 transition duration-150 ease-in-out ${className}`}
      />
    )
  }
}

export default Input;