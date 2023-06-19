// import { useState } from "react";
import styled from "@emotion/styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

const ErrorFormMessage = styled.div`
  color: red;
  background-color: green;
  font-size: 18px;
`;

const userSchema = object({
  login: string().required(),
  password: string().min(4).max(10).required(),
});

const initialValues = {
  login: "",
  password: "",
};

export const LoginForm = () => {
  //   const [login, setLogin] = useState("");
  //   const [password, setPassword] = useState("");

  //     const handleInput = (e) => {
  //      console.dir(e.target)
  //     const {
  //       target: { name, value },
  //     } = e;
  //     switch (name) {
  //       case "login":
  //         setLogin(value);
  //         break;
  //       case "password":
  //         setPassword(value);
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     console.dir(e.target.elements.login.value);
  //   };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form>
        <label>
          Login
          <Field type="text" name="login" />
          <ErrorFormMessage>
            <ErrorMessage name="login" />
          </ErrorFormMessage>
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorFormMessage>
            <ErrorMessage name="password" />
          </ErrorFormMessage>
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
