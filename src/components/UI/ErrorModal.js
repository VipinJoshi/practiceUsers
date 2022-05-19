import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onErrorAction }) => {
    return (
        <div>
            <div className={classes.backdrop}>
                <Card classes={classes.modal}>
                    <header className={classes.header}>
                        <h2>{title}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{message}</p>
                    </div>
                    <footer className={classes.actions}>
                        <Button onClick={onErrorAction}>Okay</Button>
                    </footer>
                </Card>
            </div>
        </div>)

}

export default ErrorModal;