import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

    }

    const handleSubmit = (event) => {

        event.preventDefault();

        const validationErrors = {};


        if (formData.email.trim() === '') {
            validationErrors.email = 'Email is required.';
        } else if (!isValidEmail(formData.email)) {
            validationErrors.email = 'Invalid email address.';
        }

        if (formData.password.trim() === '') {
            validationErrors.password = 'Password is required.';
        }


        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
        }
    }


    const isValidEmail = (email) => {
        // Email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    return (
        <div className="outer-box">
            <div className="inner-box">

                <header className="signup-header">
                    <h1>Login page</h1>
                </header>
                <main className="signup-body">
                    <form onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                            {errors.email && <span>{errors.email}</span>}

                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                required
                            />
                            {errors.password && <span>{errors.password}</span>}

                        </p>

                        <p>
                            <input type="submit" id="submit" value="Login" />
                        </p>

                    </form>
                </main>

                <footer className="signup-footer">
                    <p> Create a new Account? <Link to="/sign-up">signup</Link></p>
                </footer>
            </div>

        </div>
    )
}

export default Login