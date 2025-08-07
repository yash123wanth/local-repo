import React, {useState} from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Util/validators";
import { useForm } from "../../shared/Hooks/form-hook";
import "./Auth.css";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  },false)

const switchModeHandler = () => {
  if (isLoginMode) {
    // Switch to Signup: add name input
    setFormData(
      {
        ...formState.inputs,
        name: {
          value: '',
          isValid: false,
        }
      },
      false
    );
  } else {
    // Switch to Login: remove name input
    const { name, ...restInputs } = formState.inputs;
    setFormData(
      restInputs,
      formState.inputs.email.isValid && formState.inputs.password.isValid
    );
  }
  setIsLoginMode(prevMode => !prevMode);
  console.log(isLoginMode)
}


  const AuthSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    console.log("hello");
    
  }
  return (
    <Card className="authentication">
      <h2 >Login Required</h2>
      <hr />
      <form onSubmit={AuthSubmitHandler}>
        {!isLoginMode && 
          <Input 
           element= "input"
           id="name"
           type="text"
           label="Your Name"
           validators={[VALIDATOR_REQUIRE()]}
           errorText="Please enter a name"
           onInput={inputHandler}
          />
        }
        <Input
          id="email"
          type="email"
          label="E-Mail"
          element="input"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          element="input"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? 'LOGIN' : 'SIGNUP'}</Button>
      </form>
      <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>  
    </Card>
  );
};

export default Auth
