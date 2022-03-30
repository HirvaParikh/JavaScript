import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  validName,
  validEmail,
  validNumeric,
  validPhone,
  validPassword,
} from "../JS/regEx";

const initialValue = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

const initialIsValidValue = {
  isname: "",
  isemail: "",
  isphone: "",
  ispassword: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
  },
});

const ValidationDemo = () => {
  const [user, setUser] = useState(initialValue);
  const { name, email, phone, password } = user;

  const [isValid, setIsValid] = useState(initialIsValidValue);
  const { isname, isemail, isphone, ispassword } = isValid;

  const classes = useStyles();

  const validationMessageCSS = { color: "red", marginBottom: "20px" };

  // Common onChangeSetState()
  const onChangeSetState = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Common onChangeValidation()
  const onValidate = (e, regEx) => {
    const RegExObj = new RegExp(regEx);
    const isValidKey = "is" + e.target.name;

    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value === "" || RegExObj.test(e.target.value)) {
      setIsValid({ ...isValid, [isValidKey]: "" });
    } else {
      setIsValid({ ...isValid, [isValidKey]: "Invalid input..!!" });
    }
  };

  var flag = true;
  const validateDetailsFlag = Object.values(isValid).every((value) => {
    if (value !== null && value !== "") {
      flag = false;
    }
    return flag;
  });

  // Common onClick().
  function validateDetails() {
    if (validateDetailsFlag) {
      // Call API Here
    } else {
      alert("Invalid input..!!");
    }
  }

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>

      <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          onChange={(e) => onValidate(e, validName)}
          onBlur={(e) => onValidate(e, validName)}
          name="name"
          value={name}
          id="txtName"
          inputProps={{ maxLength: 40 }}
        />
        <div style={validationMessageCSS}>{isname}</div>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          onChange={(e) => onChangeSetState(e)}
          onBlur={(e) => onValidate(e, validEmail)}
          name="email"
          value={email}
          id="txtEmailId"
          inputProps={{ maxLength: 50 }}
        />
        <div style={validationMessageCSS}>{isemail}</div>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <Input
          onChange={(e) => onValidate(e, validNumeric)}
          onBlur={(e) => onValidate(e, validPhone)}
          name="phone"
          value={phone}
          id="txtContactNo"
          inputProps={{ maxLength: 10 }}
        />
        <div style={validationMessageCSS}>{isphone}</div>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          type="password"
          onChange={(e) => onChangeSetState(e)}
          onBlur={(e) => onValidate(e, validPassword)}
          name="password"
          value={password}
          id="txtPassword"
          inputProps={{ maxLength: 12 }}
        />
        <div style={validationMessageCSS}>{ispassword}</div>
      </FormControl>
      <br />
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          disabled={
            name.length === 0 ||
            phone.length === 0 ||
            email.length === 0 ||
            password.length === 0 ||
            isemail !== "" ||
            isname !== "" ||
            ispassword !== "" ||
            isphone !== ""
          }
          onClick={() => validateDetails()}
        >
          Add User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default ValidationDemo;
