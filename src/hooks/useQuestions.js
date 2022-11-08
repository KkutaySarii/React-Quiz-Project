import { useEffect, useState } from "react";

export const useQuestions = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const getValue = async () => {
      const result = await await (
        await fetch("https://opentdb.com/api.php?amount=10")
      ).json();
      setState(result.results);
    };
    getValue();
  }, []);

  return state;
};
