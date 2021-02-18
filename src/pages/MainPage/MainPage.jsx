import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
    return (
        <div className="MainPage">
            Hello, {props.name}
            <h2>Today's drink: {props.drinkName} </h2>
            <h3>Category: {props.category}</h3>
            <h4>In a {props.glass}</h4>
            <Link className="MainPage-link" to="/">Log Out</Link>
        </div>

    )
}

export default MainPage;