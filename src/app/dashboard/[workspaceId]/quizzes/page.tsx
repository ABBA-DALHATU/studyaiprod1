"use client";

import { QuizzesContent } from "@/components/pages/quizzes/quizzes-content";
import { QuizzesHeader } from "@/components/pages/quizzes/quizzes-header";
import { useState } from "react";
import { FormattedQuiz } from "@/components/pages/quizzes/quizzes-content";
import {
  QuizContext,
  type QuizContextType,
} from "@/components/pages/quizzes/quizzes-context";

export default function QuizzesPage({
  params: { workspaceId },
}: {
  params: { workspaceId: string };
}) {
  const [quizzes, setQuizzes] = useState<FormattedQuiz[]>([]);

  return (
    <QuizContext.Provider value={{ quizzes, setQuizzes }}>
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <QuizzesHeader workspaceId={workspaceId} />
        <QuizzesContent workspaceId={workspaceId} />
      </div>
    </QuizContext.Provider>
  );
}
