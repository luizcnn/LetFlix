import React from 'react'

function typeFormField(type, name, value, onChange, className, placeholder) {
    if(type === "textArea"){
        return(
            <textarea
                className={className} 
                type="text"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange} 
            />
        )
    } else {
        return(
            <input
                className={className} 
                type={type}
                placeholder={placeholder}                
                name={name}
                value={value}
                onChange={onChange} 
            />
        )
    }
}

function FormField({type, label, name, value, onChange, className, placeholder}) {
    return (
        <div className="FormField">
            <label>
                {label}
                <br/>
                {typeFormField(type, name, value, onChange, className, placeholder)}
            </label>
        </div>
    )
}

export default FormField