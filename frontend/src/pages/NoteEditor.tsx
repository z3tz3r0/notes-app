import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import TextToolBar from "@/containers/TextToolBar";
import { cn } from "@/lib/utils";
import { List, Plus, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { mockNoteDB } from "../data/mockNotes";
import type { Note } from "../types/notes";

export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [noteListOpen, setNoteListOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setNotes(mockNoteDB);
    setSelectedNote(notes[0]);
  }, [notes]);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedNotes = filteredNotes.reduce((acc, note) => {
    const category = note.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(note);
    return acc;
  }, {} as Record<string, Note[]>);

  return (
    <div className="flex h-screen bg-background">
      {/* Notes List */}
      <div
        className={cn(
          "border-r w-[300px] flex-shrink-0",
          !noteListOpen && "hidden"
        )}
      >
        <div className="p-2 flex items-center justify-between border-b">
          <span className="font-semibold">Notes</span>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setNoteListOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full rounded-md border border-input pl-8 pr-2 py-2 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-104px)]">
          {Object.entries(groupedNotes).map(([category, categoryNotes]) => (
            <div key={category}>
              <div className="px-2 py-1 text-xs font-semibold text-muted-foreground bg-muted">
                {category}
              </div>
              {categoryNotes.map((note) => (
                <div
                  key={note._id}
                  className={cn(
                    "p-2 cursor-pointer hover:bg-muted/50 border-l-2",
                    selectedNote?._id === note._id
                      ? "border-l-green-500 bg-muted/50"
                      : "border-l-transparent"
                  )}
                  onClick={() => setSelectedNote(note)}
                >
                  <h3 className="font-medium text-sm">{note.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {note.content.slice(0, 30).trimEnd()}...
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <span>{note.updatedAt.toDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Note Editor */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="border-b p-2 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {!noteListOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setNoteListOpen(true)}
              >
                <List className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Bold Italic and stuff here
          doesn't feels like it has any purpose here */}
          <TextToolBar />

          {/* Buttton group of light dark mode */}
          <div className="flex items-center space-x-1">
            {/* Change light dark mode */}
            <ModeToggle />
          </div>
        </div>

        {/* Editor */}
        {selectedNote ? (
          <div className="flex-1 overflow-auto">
            <div className="max-w-4xl mx-auto p-8">
              <h1 className="text-3xl font-bold mb-6">{selectedNote.title}</h1>
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedNote.content }}
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a note or create a new one
          </div>
        )}
      </div>
    </div>
  );
}
