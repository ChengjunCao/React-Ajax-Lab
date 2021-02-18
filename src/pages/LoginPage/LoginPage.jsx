import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <div className="LoginPage">
            <label>
                <span>USERNAME</span>
                <input
                    name="name"
                    value={props.name}
                    onChange={props.handleChange}
                />
            </label>
            <Link className="LoginPage-link" to='/main'>Login</Link>
        </div>

    )
}

export default LoginPage;