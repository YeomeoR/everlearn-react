import { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';

function App() {
  const [learners, setLearners] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection('learners').get();
        setLearners(data.docs.map(doc => doc.data()))
      }
      fetchData()
    }, []);

  return (
    <ul>
      {learners.map(learner => (
        <li key={learner.id}>{learner.firstName} {learner.lastName} {learner.email} {learner.score}</li>
      ))}
    </ul>
  );
}

export default App;
