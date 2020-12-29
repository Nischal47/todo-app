import React, {useState} from 'react';
import {Box, Button, Card, Container, TextField, Typography} from "@material-ui/core";

const TaskForm = (props) => {
    const {
        handleClose,
        todo,
        setTodo
    } = props

    const [values, setValues] = useState({
        name: '',
        date: '',
        done:false
    })
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = () => {
        console.log(values)
        setTodo([
            ...todo,
            values,
        ])
        handleClose()
    }

    return (
        <Container maxWidth="sm">
            <Card style={{marginTop: 120, padding: 30}}>
                <Typography variant="h6">
                    Add Your Task
                </Typography>
                <br/>
                <Box>

                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        type={"text"}
                        name={'name'}
                        value={values.name}
                        label="Task Name"
                        onChange={(event) => handleChange(event)}
                        placeholder={"Task Name"}
                        variant="outlined"/>
                    <p style={{marginTop: 30}}>Deadline</p>
                    <TextField

                        fullWidth={true}
                        value={values.date}
                        name={'date'}
                        onChange={(event) => handleChange(event)}
                        id="outlined-basic"
                        type={"date"}
                        variant="outlined"/>

                    <Button
                        onClick={handleSubmit}
                        style={{marginTop: 30}}
                        variant="contained"
                        color="primary">
                        Save
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};

export default TaskForm;