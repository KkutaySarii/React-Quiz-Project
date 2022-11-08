import { useEffect } from "react";
import { QuestionCard } from "./components/QuestionCard";
import { useQuestions } from "./hooks/useQuestions";

function App() {
  useEffect(() => {
    let btn = document.querySelector(".mouse-cursor-gradient-tracking");
    btn?.addEventListener("mousemove", (e) => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    });
  });

  return (
    <div className="justify-center flex">
      <div className="mouse-cursor-gradient-tracking inline-flex text-white text-4xl h-12 mt-16">
        React Quiz
      </div>
      <QuestionCard />
    </div>
  );
}

export default App;
