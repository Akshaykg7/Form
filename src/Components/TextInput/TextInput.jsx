
export const TextInput = ({handleChange, isFormValidOnBlur, id, name, type, label, errorFields,}) => {
  return (
    
    <div className="input-section">
                    <label htmlFor={id}> {label} <span className="danger">*</span></label>
                    <input
                        type={type}
                        name={name}
                        id={id}
                        onChange={handleChange}
                        onBlur={isFormValidOnBlur}
                    />
                    {errorFields[name] && <p className="danger">{label} is required</p>}
                </div>

  )
}

