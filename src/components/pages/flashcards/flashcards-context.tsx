"use client";

import { createContext } from "react";
import type { FormattedFlashcard } from "./flashcards-content";

export type FlashcardContextType = {
  flashcardSets: FormattedFlashcard[];
  setFlashcardSets: React.Dispatch<React.SetStateAction<FormattedFlashcard[]>>;
};

export const FlashcardContext = createContext<FlashcardContextType | undefined>(
  undefined
);

// Force rebuild for Vercel
