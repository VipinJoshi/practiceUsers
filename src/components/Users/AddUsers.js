import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUsers.module.css';

const AddUsers = ({ onAddUser }) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState(0);
    const [error, setError] = useState(null);

    const handleOnSubmit = event => {
        event.preventDefault();
        if (userName.trim().length === 0) {
            setError({ title: "Naam reh gaya", message: "are yar user name to dala hi nai" });
            return;
        }
        if (age < 1) {
            setError({ title: "umar reh gayi", message: "are yar ab age chupake kya karoge" });
            return;
        }
        setError(null);
        onAddUser(userName, age);

        setUserName('');
        setAge(0);
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handleErrorAction = () => {
        setError(null);
    }

    return <>
        {error && <ErrorModal title={error.title} message={error.message} onErrorAction={handleErrorAction}></ErrorModal>}
        <Card classes={classes.input}>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="userName">
                    User Name
                </label>
                <input id="username" type="text" value={userName} onChange={handleUserNameChange} />
                <label htmlFor="age">
                    Age
                </label>
                <input id="age" type="number" value={age} onChange={handleAgeChange} />
                <Button type="submit"> Add User</Button>
            </form>
        </Card>
    </>
};

export default AddUsers;