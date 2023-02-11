import classNames from "classnames";
import { useEffect, useState } from "react";
import { Circle } from "react-awesome-shapes/dist/shapes/circle";
import { CircleGrid } from "react-awesome-shapes/dist/shapes/circlegrid";
import { Donut } from "react-awesome-shapes/dist/shapes/donut";
import { ConstantSquare } from "./components/ConstantSquare";
import { DynmaicCircle } from "./components/DynamicCircle";
import { DynmaicDimaond } from "./components/DynmaicDimaond";
import { DynmaicDonut } from "./components/DynmaicDonut";
import { QuestionCard } from "./components/QuestionCard";
import { useQuestions } from "./hooks/useQuestions";

function App() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const questions = useQuestions();
  // useEffect(() => {
  //   let btn = document.querySelector(".mouse-cursor-gradient-tracking");
  //   btn?.addEventListener("mousemove", (e) => {
  //     let rect = e.target.getBoundingClientRect();
  //     let x = e.clientX - rect.left;
  //     let y = e.clientY - rect.top;
  //     btn.style.setProperty("--x", x + "px");
  //     btn.style.setProperty("--y", y + "px");
  //   });
  // });
  // console.log(questions);

  useEffect(() => {
    if (localStorage.getItem("quiz-started")) {
      setStarted(localStorage.getItem("quiz-started"));
    }
    if (localStorage.getItem("index")) {
      setIndex(parseInt(localStorage.getItem("index")));
    }
  }, []);

  function startQuiz() {
    localStorage.setItem("quiz-started", false);
    localStorage.setItem("index", parseInt(0));
    localStorage.setItem("questions", questions);
    setIndex(0);
    setStarted(!started);
  }

  return (
    <div className="flex justify-center align-center">
      <div
        className={classNames({
          "justify-center flex-col flex z-20 relative": true,
          "align-items ": !started,
        })}
      >
        {started ? (
          <QuestionCard
            questions={questions}
            index={index}
            setIndex={setIndex}
            setStarted={setStarted}
            startQuiz={startQuiz}
          />
        ) : (
          <>
            <div className="justify-center font-bold flex inline-flex text-white text-4xl h-12 mt-16">
              React Quiz Project
            </div>
            <div
              onClick={startQuiz}
              className="start flex justify-center mt-9 w-[20vh] self-center"
            >
              Start Quiz
            </div>
          </>
        )}
      </div>
      <Circle
        color="linear-gradient(225deg, rgb(254, 215, 170), rgb(251, 146, 60))"
        size={["210px", "210px", "210px", "210px"]}
        zIndex={10}
        top="100px"
        left="-50px"
      />
      <Circle
        color="linear-gradient(45deg, rgb(199, 210, 254), rgb(129, 140, 248))"
        size={["35px", "35px", "35px", "35px"]}
        zIndex={10}
        top="80px"
        left="40px"
        className="animate-drop"
      />
      <Circle
        color="linear-gradient(135deg, rgb(249, 168, 212), rgb(236, 72, 153))"
        size={["120px", "120px", "120px", "120px"]}
        zIndex={10}
        top="300px"
        right="50px"
      />
      <CircleGrid
        color="white"
        size={["175px", "175px", "175px", "175px"]}
        top="100px"
        right="0px"
        zIndex={10}
      />
      <ConstantSquare />
      <DynmaicCircle />
      <DynmaicDimaond />
      <DynmaicDonut />
      <Donut
        color="rgb(192, 132, 252)"
        size="100px"
        width={["20px", "20px", "60px", "60px"]}
        top="400px"
        left="-20px"
        zIndex={10}
      />
    </div>
  );
}

export default App;
