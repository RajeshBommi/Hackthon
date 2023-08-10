import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegistrationForm = ({ onRegistration }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    // Generate a unique ID for the new user (in a real-world scenario, this would come from the backend)
    const id = new Date().getTime();
    const newUser = { id, username, email, password };
    onRegistration(newUser); // Pass the new user data to the parent component
    // Clear form inputs
    setUsername('');
    setEmail('');
    setPassword('');

  };

  return (
  
    <Form onSubmit={handleRegistration}>
    
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegistrationForm;
