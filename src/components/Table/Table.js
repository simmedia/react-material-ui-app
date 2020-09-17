import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

import "./Table.css";

const useStyles = makeStyles({
  fullWidth: {
    minWidth: 650,
  },
  fullList: {
    width: "auto",
  },
});

const MaterialTableDemo = (props) => {
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
    ],
  });

  const classes = useStyles();
  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={props.usersList}
      options={{
        padding: "default",
      }}
      className={classes.fullWidth}
      editable={{
        onRowAdd: (newData) => {
          console.log("added", newData);
          props.onAddUser(newData);
        },
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) => props.sayHello(),
      }}
    />
  );
};

export default MaterialTableDemo;
