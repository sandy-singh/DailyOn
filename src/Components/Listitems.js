import React from "react";
import "../ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
function ListItems(props) {
  const tasks = props.tasks;
  const taskItems = tasks.map((task) => {
    return (
      <div className="list" key={task.key}>
        <p>
          <input
            type="text"
            id={task.key}
            value={task.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, task.key);
            }}
          />

          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="check"
              onClick={() => props.completeTask(task)}
            />
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteTask(task.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {taskItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
