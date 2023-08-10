// LoginComponent.js
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validation against registered users)
    // After successful login, redirect to user home page
    // history.push('/userhome');
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
