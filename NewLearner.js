import React from 'react';
import { Form, Button } from 'react-bootstrap';
import firebase from '../firebase';

const NewLearner = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [score, setScore] = React.useState('');

    const submitHandler = (e) => {
    e.preventDefault();
      const db = firebase.firestore();
      
      db.collection('learners')
        .add({
          firstName: firstName,
          lastName: lastName,
          email: email,
          score: score,
        })
        .then(() => {
          alert('New Learner Added...');
        })
        .catch((error) => console.log(error.message));
      setFirstName('');
      setLastName('');
      setEmail('');
      setScore('');

  };

  return (
    <Form className="form" onSubmit={submitHandler}>
      <h6>Add a new learner</h6>
      <label>First Name</label>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Last Name</label>
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Score</label>
      <input
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <Button type="submit" >Create New Learner</Button>
    </Form>
  );
};

export default NewLearner;
