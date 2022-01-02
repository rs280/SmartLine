import React, { useEffect, useState } from "react";
import { Container, TextField } from "@material-ui/core";
import Cookies from "js-cookie";

import StudentList from "./StudentList";
import FieldEditor from "./FieldEditor";

const TAView = props => {
  

  const notifyFunction = user => {
    const notifContent = {
      title: props.user.name + " please go to checkout",
      
    };
    const msg = {
      type: "action",
      action: "sendnotif",
      value: user,
      notifContent: notifContent
    };
    props.ws.send(JSON.stringify(msg));
  };

  const removeUser = user => {
    const msg = { type: "action", action: "remove", value: user };
    props.ws.send(JSON.stringify(msg));
  };

  useEffect(() => {
    if (!Cookies.get("ta")) {
      console.log("no c");
      
    } else {
      const ta = JSON.parse(Cookies.get("ta"));
    
    }
  }, );

  

  return (
    <Container maxWidth="sm">
      <h1>Smart Line Admin</h1>
      
      
      <StudentList
        users={props.users}
        admin={true}
        notifyFunction={notifyFunction}
        removeUserFunction={removeUser}
      />
    </Container>
  );
};

export default TAView;