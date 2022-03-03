import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then((resp)=> resp.json())
    .then((dataArr) => setQuestions(dataArr));
      
    }, [])

    function handleDeleteClick(id){
      console.log("clicked delete")
      fetch(`http://localhost:4000/questions/${id}`, {
      method: "Delete",
      }) 
      .then((resp)=> resp.json())
      .then(()=> {
        const updatedQuestionList = questions.filter((question)=>question.id !==  id);
      setQuestions(updatedQuestionList)
    });
  }

    const dataToDisplay = questions.map((questions) => 
    <QuestionItem 
      question= {questions}
      onDeleteClick = {handleDeleteClick}
    /> )

    return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> {dataToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
