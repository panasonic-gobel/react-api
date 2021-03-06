import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    height: 100%;
    align-content: center;
  }
  .card {
    height: 370px;
    margin-top: 150px;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
  .card-header h3 {
    color: white;
  }
`;
const Login = props => (
  <Styles>
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={values => {
                axios
                  .post(
                    "https://formcarry.com/s/8RrsJppG7kx",
                    values,
                {})
                
                  .then(res => {
                    if (res.status === 200) props.history.push("/Recipe");
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  action="https://formcarry.com/s/8RrsJppG7kx"
                  method="POST"
                >
                  <Field
                    type="email"
                    name="email"
                    placeholder="email@email.email"
                  />
                  <br />
                  <ErrorMessage name="email" component="div" />
                  <br />
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <ErrorMessage name="password" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                    login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </Styles>
);

export default Login;
