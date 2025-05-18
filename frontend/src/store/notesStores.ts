import { create } from "zustand";

interface NoteState {
  editorContent: string;
  setEditorContent: (content: string) => void;
  loadNoteContent: (content: string) => void;
}

export const useNoteStore = create<NoteState>((set) => ({
  editorContent: "",
  setEditorContent: (content) => set({ editorContent: content }),
  loadNoteContent: (content) => set({ editorContent: content }),
}));
