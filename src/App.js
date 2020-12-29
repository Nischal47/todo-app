import React, {useState} from "react";
import {Button, Container, Icon, Modal, Toolbar, Typography} from "@material-ui/core";
import TodoList from "./TodoList";
import TaskForm from "./TaskForm";

const App = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleClose = () => {
        setOpenModal(false);
    }
    const handleOpen = () => {
        setOpenModal(true);
    }

    const [todo, setTodo] = useState(
        []
    )
    return (
        <>
            <Container className={'container'} maxWidth="lg" style={{marginTop: 40}}>
                <Toolbar style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <Typography variant="h6">
                        Task
                    </Typography>
                    <Button color="default" onClick={handleOpen}>
                        <Icon style={{fontSize: 30, color: "blue"}}>add_circle</Icon>
                    </Button>
                </Toolbar>
                <TodoList todo={todo} setTodo={setTodo}/>
            </Container>
            <Modal
                style={{outline:"none"}}
                open={openModal}
                onClose={handleClose}
            >
                <TaskForm
                    todo={todo}
                    setTodo={setTodo}
                    handleClose={handleClose}
                />
            </Modal>
        </>
    );
}
export default App;
