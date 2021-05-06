import './App.css';
import { Table, Button } from 'react-bootstrap';
import firebase from './firebase';
import React from 'react';
import NewLearner from './components/NewLearner'
// import LearnerInput from './LearnerInput';

function App() {
  const [learners, setLearners] = React.useState([]);
 
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('learners').get();
      setLearners(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []); // end useEffect

  // const deleteHandler = (e) => {
  //   e.preventDefault();
    // const db = firebase.firestore();
    // db.collection('learners')
    //   .delete({ 
        
  // });

  // const learners = [
  //   {
  //     firstName: 'Robert',
  //     lastName: 'Yeomans',
  //     email: 'email@yeomeo.dev',
  //     score: '10',
  //   },
  //   {
  //     firstName: 'Olivia',
  //     lastName: 'Neame',
  //     email: 'olivia@yeomeo.dev',
  //     score: '9',
  //   },
  //   {
  //     firstName: 'Alex',
  //     lastName: 'Pullen',
  //     email: 'alex@yeomeo.dev',
  //     score: '7',
  //   },
  //   {
  //     firstName: 'Harry',
  //     lastName: 'Smith',
  //     email: 'harry@yeomeo.dev',
  //     score: '7',
  //   },
  // ];

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
          {learners.map((item, i) => (
            <tr key={i}>
              <Button
                variant="outline-info"
                size="md"
                block
                className="btn-inline"
              >
                update
              </Button>
              <Button
                variant="outline-danger"
                size="md"
                block
                className="btn-inline"
              >
                delete
              </Button>
              <td>{i + 1}</td>
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
