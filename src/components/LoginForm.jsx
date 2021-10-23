import { Formik, Form } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import { changePasswordInput, changeUsernameInput, login } from "../redux/actions/index.js";
import InputElement from "./InputElement.jsx";
import './LoginForm.scss';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "username is too short, must be at least 3 char long")
    .required("No username provided."),
  password: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum.")
});

function LoginForm({ history }) {
  const authenticated = useSelector(state => state.authenticated);
  const username = useSelector(state => state.username);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  useEffect(() => {
    authenticated && history.push("/profile");
  }, [authenticated])

  return (
    <Formik
      initialValues={{
        username: username,
        password: password
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(login(username, password));
          setSubmitting(false);
        }, 100);
      }}
    >
      {({ values, errors, isSubmitting }) => (
        <div className="login-gorm-wrapper">
          <Form className="login-form">
            <p>Login</p>
            <InputElement
              labelName="Логин: "
              type="text"
              value={values.username}
              fieldName="username"
              errors={errors}
              handleChange={() => dispatch(changeUsernameInput(values.username))}
            />
            <InputElement
              labelName="Пароль: "
              type="password"
              value={values.password}
              fieldName="password"
              errors={errors}
              handleChange={() => dispatch(changePasswordInput(values.password))}
            />
            <button type="submit" disabled={isSubmitting}>
              Войти
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default withRouter(LoginForm);
