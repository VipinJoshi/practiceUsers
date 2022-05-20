import React from "react";
import ReactDom from 'react-dom';
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

const BackDrop = ({ onConfirm }) => {
    return <div className={classes.backdrop} onConfirm={onConfirm}></div>
}

const ModalOverLay = ({ title, message, onErrorAction }) => {
    return (<Card classes={classes.modal}>
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
    )
}
const ErrorModal = ({ title, message, onErrorAction }) => {
    return (
        <>
            {ReactDom.createPortal(<BackDrop onConfirm={onErrorAction} />, document.getElementById('overlay-root'))}
            {ReactDom.createPortal(<ModalOverLay title={title} message={message} onErrorAction={onErrorAction} />,
                document.getElementById('modal-root'))}
        </>)

}

export default ErrorModal;