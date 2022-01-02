import React, { useState, useEffect } from "react";
import { colors, TextField } from "@material-ui/core";
import { Edit, Check } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  input: {
    color: "white",
  },
}));
const FieldEditor = props => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(props.value);
  const classes = useStyles();
  const handleTextboxUpdate = event => {
    setValue(event.target.value);
  };

  const save = () => {
    setIsEdit(false);
    props.onSave(value);
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <div>
      {!isEdit && (
        <h4 onClick={() => setIsEdit(true)}>
          {value} <Edit fontSize="small" />
        </h4>
      )}
      {isEdit && (
        <div>
          <TextField
            value={value || ""}
            onChange={handleTextboxUpdate}
            onBlur={save}
            label={props.label}
            variant="outlined"
            size="small"
            sx={{ input: { color: 'white' } }}
            inputProps={{ className: classes.input }}
          />
          
          <Check onClick={save} />
        </div>
      )}
    </div>
  );
};

export default FieldEditor;
