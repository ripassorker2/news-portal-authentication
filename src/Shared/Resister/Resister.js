import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Resister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const { createUserEmailPassword, updateUserProfile } =
    useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUserEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/home");
        setError("");
        // toast.info("Create user succesfully !!");
        form.reset();
        const profile = {
          displayName: name,
          photoURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg30kWDYgrSeRobjdwPDiNw1EDK62VkV4SvPXWGT5bqSCAdnNG0CjRmpXRcW43N9OHCY&usqp=CAU",
        };
        updateUserProfile(profile)
          .then(() => {})
          .catch(() => {});
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleTermsAndCondition = (event) => {
    setTerms(event.target.checked);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="border p-5 mt-5 w-50 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
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
        <Form.Group
          onClick={handleTermsAndCondition}
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Accept terms and condition !!" />
        </Form.Group>
        <Button
          className="w-100"
          variant="info"
          type="submit"
          disabled={!terms}
        >
          Submit
        </Button>
        <p className="text-danger pt-3">{error}</p>
      </Form>
    </div>
  );
};

export default Resister;
