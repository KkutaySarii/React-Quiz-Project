import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Loading } from "./Loading";

export const QuestionCard = ({
  questions,
  index,
  setIndex,
  setStarted,
  startQuiz,
}) => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState();
  const [userAnswer, setUserAnswer] = useState([]);
  const [userCurAnswer, setCurUserAnswer] = useState("");
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(true);
  useEffect(() => {
    if (questions && index !== undefined) {
      let ans = questions ? questions[index].incorrect_answers : [];
      const a = Math.floor(Math.random() * ans.length);
      ans.splice(a, 0, questions ? questions[index].correct_answer : null);
      setAnswers(ans);
    }
  }, [questions, index]);

  useEffect(() => {
    if (questions && index) {
      if (index === 0) {
        setPrev(true);
      } else {
        setPrev(false);
      }
    }
  }, [index, questions]);

  function prevQuestion() {
    setIndex(index - 1);
    localStorage.setItem("index", index - 1);
    setCurUserAnswer("");
  }

  function nextQuestion() {
    if (userCurAnswer === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please give an answer!",
      });
    } else {
      setIndex(index + 1);
      localStorage.setItem("index", index + 1);
      setCurUserAnswer("");
    }
  }

  function finishQuiz() {
    Swal.fire({
      icon: "success",
      title: "Congratulations!..",
      text: "Your Score : " + score,
    });
    setStarted(false);
  }

  return (
    <>
      {questions ? (
        <div className="p-4 text-white justify-center w-[500px] rounded-quiz_card shadow-quiz_card">
          <div className="mt-4 text-2xl font-bold text-center text-white">
            Question: {index + 1}/ {questions.length}
          </div>
          <div className="mt-10 text-xl font-semibold text-center">
            {questions[index].question}
          </div>
          <div className="mt-10 mb-6 px-4 grid  gap-6 flex-col justify-center">
            {answers?.map((key, ind) => (
              <button
                key={ind}
                onClick={() => {
                  const ans = [...userAnswer];
                  ans[index] = answers[ind];
                  setCurUserAnswer(answers[ind]);
                  if (answers[ind] === questions[index].correct_answer) {
                    setScore(score + 1);
                  }
                  setUserAnswer(ans);
                }}
                className="answer-button w-[300px] "
              >
                {answers ? answers[ind] : "Answer is loading"}
              </button>
            ))}
            {index !== questions.length - 1 ? (
              <div className="flex justify-between">
                <button
                  disabled={prev}
                  className=" w-[120px] answer-button-ha"
                  onClick={prevQuestion}
                >
                  Prev Question
                </button>
                <button
                  disabled={next}
                  className=" w-[120px]  answer-button-ha "
                  onClick={nextQuestion}
                >
                  Next Question
                </button>
              </div>
            ) : (
              <button
                className=" w-[120px] answer-button justify-self-center"
                onClick={finishQuiz}
              >
                Finish
              </button>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

{
  /* 
  <div className="justify-center w-[500px] border mt-48">
          <div className="mt-4 text-2xl font-bold text-center text-white">
            Question: {index + 1}/ {questions.length}
          </div>
          <div className="mt-4 text-xl font-bold text-center">
            {"Question is loading"}
          </div>
          <div className="mt-4 mb-6 grid  gap-6 flex-col justify-center">
            {answers?.map((key, ind) => (
              <button
                key={ind}
                onClick={() => setUserAnswer(ind)}
                className="w-[350px] bg-btn-pattern h-12 text-white hover:bg-hvr-btn-pattern focus:bg-act-btn-pattern"
              >
                {answers ? ind : "Answer is loading"}
              </button>
            ))}
            {gameover ? (
              <div></div>
            ) : (
              <div className="flex justify-between">
                <button
                  className="w-[150px] max-w-[150px] bg-btn-pattern hover:bg-hvr-btn-pattern h-12 text-white  mt-6 "
                  onClick={handleQuestion}
                >
                  Previous Question
                </button>
                <button
                  className="w-[150px] max-w-[150px] bg-btn-pattern hover:bg-hvr-btn-pattern h-12 text-white  mt-6 "
                  onClick={handleQuestion}
                >
                  Next Question
                </button>
              </div>
            )}
          </div>
        </div>  
  */
}
