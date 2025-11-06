"use client";

import { createContext } from "react";
import type { FormattedQuiz } from "./quizzes-content";

export type QuizContextType = {
  quizzes: FormattedQuiz[];
  setQuizzes: React.Dispatch<React.SetStateAction<FormattedQuiz[]>>;
};

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined
);
