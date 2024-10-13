import { useState } from "react";
import "./App.css";

function App() {
    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        gender: "",
        dob: "",
        country: "",
        skills: [],
    });

    const [errorFields, setErrorFields] = useState({
        firstName: false,
        email: false,
        gender: false,
        dob: false,
        country: false,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValidOnSubmit()) {
            console.log("Valid");
            alert("Submitted");
            console.log(fields);

            return;
        }
        console.log("InValid");
    };

    const handleChange = (event) => {
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
        isFormValidOnBlur(event);
    };

    const handleCheckbox = (event) => {
        let newSkills = [...fields.skills];

        if (event.target.checked) {
            newSkills.push(event.target.value);
        } else {
            newSkills = newSkills.filter((skill) => skill !== event.target.value);
        }

        setFields((prev) => ({
            ...prev,
            [event.target.name]: newSkills,
        }));
    };

    console.log(fields.skills);

    const isFormValidOnSubmit = () => {
        let errors = {
            firstName: false,
            email: false,
            gender: false,
            dob: false,
            country: false,
        };

        if (fields.firstName === "") {
            errors.firstName = true;
        }
        if (fields.email === "") {
            errors.email = true;
        }
        if (fields.gender === "") {
            errors.gender = true;
        }
        if (fields.dob === "") {
            errors.dob = true;
        }
        if (fields.country === "") {
            errors.country = true;
        }

        setErrorFields(errors);
        console.log(errorFields);

        if (Object.values(errors).some((error) => error === true)) {
            return false;
        }
        return true;
    };

    const isFormValidOnBlur = (event) => {
        const { name, value } = event.target;

        let error = false;

        if (name === "firstName" && value === "") {
            error = true;
        } else if (
            name === "email" &&
            (value === "" || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))
        ) {
            error = true;
        } else if (name === "gender" && value === "") {
            error = true;
        } else if (name === "dob" && value === "") {
            error = true;
        } else if (name === "country" && value === "") {
            error = true;
        }

        setErrorFields((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit} noValidate>
                <h1>Register</h1>
                <p className="caption">Please fill the form</p>

                <div className="input-section">
                    <label htmlFor="first-name">
                        Fist Name <span className="danger">*</span>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="first-name"
                        onChange={handleChange}
                        onBlur={isFormValidOnBlur}
                    />
                    {errorFields.firstName && <p className="danger">First Name is required</p>}
                </div>

                <div className="input-section">
                    <label htmlFor="email">
                        Email <span className="danger">*</span>
                    </label>
                    <input type="email" name="email" id="email" onChange={handleChange} onBlur={isFormValidOnBlur} />
                    {errorFields.email && <p className="danger">Email Name is required</p>}
                </div>
                <div className="input-section radio-groups">
                    <label htmlFor="">Gender</label>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            onChange={handleChange}
                            onBlur={isFormValidOnBlur}
                        />
                        <label htmlFor="male" className="radio-button">
                            Male
                        </label>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={handleChange}
                            onBlur={isFormValidOnBlur}
                        />
                        <label htmlFor="female" className="radio-button">
                            Female
                        </label>
                    </div>
                    {errorFields.gender && <p className="danger">Gender Name is required</p>}
                </div>

                <div className="input-section">
                    <label htmlFor="date-of-birth">Date Of Birth</label>
                    <div className="dob-box">
                        <input
                            type="date"
                            name="dob"
                            id="date-of-birth"
                            onChange={handleChange}
                            onBlur={isFormValidOnBlur}
                        />
                    </div>
                    {errorFields.gender && <p className="danger">Date Of Birth is required</p>}
                </div>

                <div className="input-section">
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country" onChange={handleChange} onBlur={isFormValidOnBlur}>
                        <option value="">Select</option>
                        <option value="india">INDIA</option>
                        <option value="uk">UK</option>
                        <option value="uae">UAE</option>
                    </select>
                </div>

                <div className="input-section checkbox">
                    <label htmlFor="">Skills</label>
                    <div className="checkbox-skills">
                        <input
                            type="checkbox"
                            name="skills"
                            id="javascript"
                            value="javascript"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="javascript" className="checkbox-skills">
                            Javascript
                        </label>
                        <input type="checkbox" name="skills" id="css" value="css" onChange={handleCheckbox} />
                        <label htmlFor="css" className="checkbox-skills">
                            Css
                        </label>
                        <input type="checkbox" name="skills" id="html" value="html" onChange={handleCheckbox} />
                        <label htmlFor="html" className="checkbox-skills">
                            Html
                        </label>
                        <input type="checkbox" name="skills" id="php" value="php" onChange={handleCheckbox} />
                        <label htmlFor="php" className="checkbox-skills">
                            Php
                        </label>
                    </div>
                </div>

                <button className="submit-button">Submit</button>
            </form>
        </>
    );
}

export default App;
