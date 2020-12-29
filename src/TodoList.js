import React from "react";
import {Box, Button, Card, Icon, List, ListItem, Typography} from "@material-ui/core";
import moment from "moment";

const TodoList = (props) => {

    const {todo,setTodo} = props;

    function onDone(index) {
        const filteredItems = todo.filter(item => {
            return item.name !== todo[index].name
        })
        console.log(filteredItems)
        setTodo([
            filteredItems,
        ])
    }

    return (
        <>
            <List component="nav" aria-label="main">
                {
                    todo.map((item, index) => (
                        <Card variant="elevation" style={{margin: 20}} key={index}>
                            <ListItem
                                style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Box>
                                    <Typography variant="h6">
                                        {
                                            item.name
                                        }
                                    </Typography>
                                    <Typography variant="p">
                                        {
                                            moment(item.date).format("MMM Do YY")
                                        }
                                    </Typography>
                                </Box>
                                {
                                    item.done && <Icon style={{fontSize: 30, color: "gold"}}>done</Icon>
                                }
                                <Box style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}>
                                    <Typography variant="p">
                                        {

                                            moment(item.date).calendar()
                                        }
                                    </Typography>
                                    <Button onClick={() =>onDone(index)}>
                                        <Icon style={{fontSize: 30, color: "blue"}}>done</Icon>
                                    </Button>
                                </Box>
                            </ListItem>
                        </Card>
                    ))
                }
            </List>
        </>
    )

}

export default TodoList;