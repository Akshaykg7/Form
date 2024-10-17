
export const Radio = ( {handleChange, isFormValidOnBlur, type, label, name, errorFields} ) => {
  return (
    <div className="input-section radio-groups">
                    <label htmlFor="">{label}</label>
                    <div>
                        <input
                            type={type}
                            name={name}
                            id="male"
                            value="male"
                            onChange={handleChange}
                            onBlur={isFormValidOnBlur}
                        />
                        <label htmlFor="male" className="radio-button">
                            Male
                        </label>
                        <input
                            type={type}
                            name={name}
                            id="female"
                            value="female"
                            onChange={handleChange}
                            onBlur={isFormValidOnBlur}
                        />
                        <label htmlFor="female" className="radio-button">
                            Female
                        </label>
                    </div>
                    
                    {errorFields[name] && <p className="danger">{label} is required</p>}
                </div>
  )
}

