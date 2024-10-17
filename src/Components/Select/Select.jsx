export const Select = ({ errorFields, handleChange, isFormValidOnBlur, label, name }) => {
    return (
        <div className="input-section">
                <label htmlFor="country">{label}</label>
            <select name="country" id="country" onChange={handleChange}  onBlur={isFormValidOnBlur}>
                <option value="">Select</option>
                <option value="india">INDIA</option>
                <option value="uk">UK</option>
                <option value="uae">UAE</option>
            </select>
            {errorFields[name] && <p className="danger">{label} is required</p>}
        </div>
    );
};
