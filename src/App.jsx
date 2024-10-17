import { useState } from "react";
import "./App.css";
import { TextInput } from "./Components/TextInput/TextInput";
import { Radio } from "./Components/Radio/Radio";
import { Select } from "./Components/Select/Select";

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

                <TextInput
                    id="first-name"
                    name="firstName"
                    type="text"
                    label="First Name"
                    handleChange={handleChange}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                />

                <TextInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    handleChange={handleChange}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                />

                <Radio
                    type="radio"
                    label="Gender"
                    name="gender"
                    handleChange={handleChange}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                />

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
                    {errorFields.dob && <p className="danger">Date Of Birth is required</p>}
                </div>

                <Select 
                    name="country"
                    label="Country"
                    handleChange={handleChange}
                    isFormValidOnBlur={isFormValidOnBlur}
                    errorFields={errorFields}
                />

                <div className="input-section checkbox">
                    <label htmlFor="">Skills</label>
                    <div>
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
