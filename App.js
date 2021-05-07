import './App.css';
import { Table, Button } from 'react-bootstrap';
import firebase from './firebase';
import React from 'react';
import NewLearner from './components/NewLearner';

// import LearnerInput from './LearnerInput';

function App() {
  const [learners, setLearners] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('learners').get();
      console.log(data);
      setLearners(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []); // end useEffect

  // const updateHandler = () => {
  //   const db = firebase.firestore();
  //   db.collection('learners').doc(doc.id).set();
  // };

  // const deleteHandler = () => {
  //   const db = firebase.firestore();
  //   db.collection('learners').doc(doc.id).delete();
  // };

  // const averageScore = learners.score.reduce((a, b) => {
  //   return (a + b) / learners.score.length;
  // });

  return (
    <div className="App">
      <h1>Everlearn Holding</h1>
      <div>
        <NewLearner />

        {/* <Button variant="secondary">Update</Button> */}
        {/* <Button onClick={deleteHandler}>Delete</Button> */}
      </div>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>Action</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Score</td>
          </tr>
          {learners.map((item, id) => (
            <tr key={id}>
              <Button
                variant="outline-info"
                size="md"
                block
                className="btn-inline"
                // onClick={updateHandler}
              >
                update
              </Button>
              <Button
                variant="outline-danger"
                size="md"
                block
                className="btn-inline"
                // onClick={deleteHandler}
              >
                delete
              </Button>
              <td>{id + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
