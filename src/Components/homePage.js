import React, { useReducer, useEffect, useState } from "react";

import "../App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import ListItems from "./../Components/Listitems";
import CompletedTasksList from "./../Components/completedTasksComponenet";
import {
  Card,
  CardHeader,
  CardContent,
  Snackbar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import theme from "../theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck, faUndo } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faCheck, faUndo);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
});

const HomePage = () => {
  //Initial States
  const initialState = {
    msg: "",
    currentTask: { text: "", key: "" },
    taskList: [],
    completedTasks: [],
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  const classes = useStyles();

  const handleTaskInput = (e) => {
    setState({ currentTask: { text: e.target.value, key: Date.now() } });
  };

  const onAddClicked = async () => {
    var tempList = state.taskList.concat(state.currentTask);
    setState({ taskList: tempList, currentTask: { text: "", key: "" } });
  };

  const onDeleteTask = async (key) => {
    const filteredList = state.taskList.filter((task) => task.key !== key);
    setState({ taskList: filteredList });
  };
  const onUpdate = async (text, key) => {
    const tempTasks = state.taskList;
    tempTasks.map((task) => {
      if (task.key === key) {
        task.text = text;
      }
    });
    setState({ taskList: tempTasks });
  };

  const onCompleteTask = async (task) => {
    const tempCompletedTasks = state.CompletedTasks.concat(task);

    const filteredList = state.taskList.filter((task) => task.key !== task.key);

    setState({ taskList: filteredList, completedTasks: tempCompletedTasks });
  };

  const emptyorundefined =
    state.currentTask.text === undefined || state.currentTask.text === "";

  return (
    <MuiThemeProvider theme={theme}>
      <Card style={{ marginTop: "20%" }}>
        {/* <CardMedia
          className={classes.media}
          image={require("/FanshaweCollege/Semester_5/JavaScript - INFO-3139/reactexercises/src/project1/logo.png")}
          title="logo"
        /> */}
        <CardHeader
          title="Tasks"
          style={{ textAlign: "center", color: "#87B9BD" }}
        />

        <CardContent>
          <TextField
            id="taskInput"
            onChange={handleTaskInput}
            helperText="enter Task here..."
            value={state.currentTask.text}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 10, float: "center" }}
            onClick={onAddClicked}
            disabled={emptyorundefined}
          >
            Add Advisory
          </Button>
          <ListItems
            tasks={state.taskList}
            deleteTask={onDeleteTask}
            setUpdate={onUpdate}
            completeTask={onCompleteTask}
          ></ListItems>
          <CompletedTasksList tasks={state.completedTasks}></CompletedTasksList>
          <Typography
            color="primary"
            style={{ float: "right", paddingRight: "1vh", fontSize: "smaller" }}
          >
            &copy; Sandy Singh,2020
          </Typography>
        </CardContent>
        <p />
      </Card>
    </MuiThemeProvider>
  );
};

export default HomePage;
