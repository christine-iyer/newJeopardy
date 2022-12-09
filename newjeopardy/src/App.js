import './styles.css'
import { useState } from "react";
import Score from "./components/Score";
import Question from './components/Question'
import Answer from './components/Answer';
import Category from './components/Category';



export default function App() {
  //set state for for questions and scoring
  const [jeopardyQuest, setJeopardyQuest] = useState(null);
  const [score, setScore] = useState(0);
  // const [category, setCategory] = useState(null);

  const getScore = () => {
    if (jeopardyQuest && jeopardyQuest.value) {
      setScore(score + jeopardyQuest.value);
    }
  }
  // const getCategory = () => {
  //   if (jeopardyQuest && jeopardyQuest.category) {
  //     setCategory(jeopardyQuest.category.title);
  //   }
  // }

  const getJeopardyQuest = async () => {
    try {
      const response = await fetch('https://jservice.io/api/random');
      const data = await response.json();
      setJeopardyQuest(data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='App'>
      <h2><Category jeopardyQuest={jeopardyQuest} /></h2>

      <h4><Question jeopardyQuest={jeopardyQuest} getJeopardyQuest={getJeopardyQuest} /></h4>
      
      <h4><Answer jeopardyQuest={jeopardyQuest} /></h4>
      <h4><Score score={score} getScore={getScore} /></h4>

    </div>
  )

}



