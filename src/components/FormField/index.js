import React from 'react'

function checkType(type, name, value, onChange) {
    if(type === "textArea"){
        return(
            <textarea 
                type="text"
                name={name}
                value={value}
                onChange={onChange} 
            />
        )
    } else {
        return(
            <input 
                type={type}                
                name={name}
                value={value}
                onChange={onChange} 
            />
        )
    }
}

function FormField({type, label, name, value, onChange}) {
    return (
        <div>
            <label>
                {label}
                {checkType(type, name, value, onChange)}
            </label>
        </div>
    )
}

export default FormField