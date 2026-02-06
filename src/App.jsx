import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import ChallengeList from './ChallengeList';
import Challenge from './challenge';
import AddChallenge from './AddChallenge';

function App() {
  const [challenges, setChallenges] = useState([
  ]);

   const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');
      console.log("response data>>>>>>", response.data);
      setChallenges(response.data);
    }
    catch (error) {
      console.log("error message>>>>>>", error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchChallenges();
  }, []);



    const handleChallengeAdded = () => {
      fetchChallenges();
    };


    return (

      <>
        <AddChallenge onHandleChallenge={handleChallengeAdded} />
        <ChallengeList challenges={challenges} />




      </>
    )
  }


  export default App;
