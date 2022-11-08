import { useEffect, useState } from "react";
import { useQuestions } from "../hooks/useQuestions";
import Swal from "sweetalert2";

export const QuestionCard = () => {
  const swal = require("sweetalert2");
  const questions = useQuestions();
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState();
  const [userAnswer, setUserAnswer] = useState("");
  const [gameover, setGameover] = useState(false);
  useEffect(() => {
    let ans = questions ? questions[index].incorrect_answers : [];
    const a = Math.floor(Math.random() * ans.length);
    ans.splice(a, 0, questions ? questions[index].correct_answer : null);
    setAnswers(ans);
  }, [questions, index]);

  const handleQuestion = () => {
    if (index + 1 !== questions.length) {
      if (userAnswer !== "") {
        if (questions[index].correct_answer === userAnswer) {
          setScore(score + 1);
        }
        setIndex(index + 1);
        setUserAnswer("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please give an answer!",
        });
      }
    } else {
      setGameover(false);
    }
  };

  return (
    <>
      <div className="fixed mt-36  text-white text-3xl h-10">
        Score: {score}
      </div>
      <div className="justify-center w-[500px] border mt-48">
        <div className="mt-4 text-xl font-bold text-center">
          Question: {index + 1}/10
        </div>
        <div className="mt-4 text-xl font-bold text-center">
          {questions ? questions[index].question : "Question is loading"}
        </div>
        <div className="mt-4 mb-6 grid  gap-6 flex-col justify-center">
          {answers?.map((ind) => (
            <button
              key={ind}
              onClick={() => setUserAnswer(ind)}
              className="w-[350px] bg-btn-pattern h-12 text-white hover:bg-hvr-btn-pattern focus:bg-act-btn-pattern"
            >
              {answers ? ind : "Answer is loading"}
            </button>
          ))}
          <button
            className="w-[200px] bg-btn-pattern hover:bg-hvr-btn-pattern h-12 text-white justify-self-center mt-6 "
            onClick={handleQuestion}
          >
            Next Question
          </button>
        </div>
      </div>
    </>
  );
};
