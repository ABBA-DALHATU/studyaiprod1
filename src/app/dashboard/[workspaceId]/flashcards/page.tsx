"use client";

import {
  FlashcardsContent,
  FormattedFlashcard,
} from "@/components/pages/flashcards/flashcards-content";
import { FlashcardsHeader } from "@/components/pages/flashcards/flashcards-header";
import { useState } from "react";
import {
  FlashcardContext,
  // type FlashcardContextType,
} from "@/components/pages/flashcards/flashcards-context";

export default function FlashcardsPage({
  params: { workspaceId },
}: {
  params: { workspaceId: string };
}) {
  const [flashcardSets, setFlashcardSets] = useState<FormattedFlashcard[]>([]);

  return (
    <FlashcardContext.Provider value={{ flashcardSets, setFlashcardSets }}>
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <FlashcardsHeader workspaceId={workspaceId} />
        <FlashcardsContent workspaceId={workspaceId} />
      </div>
    </FlashcardContext.Provider>
  );
}
