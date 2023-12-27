import { createContext } from "react";

const QuizContext = createContext();

function QuizProvider({ children }) {
  return <QuizContext.Provider>{children}</QuizContext.Provider>;
}

export { QuizProvider };
