import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signInEmailPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        // toast.success("Login succesFully !!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="border p-5 mt-5 w-50 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button className="w-100" variant="info" type="submit">
          Submit
        </Button>
        <div>
          <p className="text-danger pt-3 ">{error}</p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
