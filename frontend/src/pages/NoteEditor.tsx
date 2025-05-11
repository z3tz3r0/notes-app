"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  AlignLeft,
  Bold,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Maximize2,
  Menu,
  Plus,
  Search,
  Strikethrough,
  Table,
  Underline,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type Note = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  category?: string;
};

export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [noteListOpen, setNoteListOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Mock data
    const mockNotes: Note[] = [
      {
        id: "1",
        title: "A Bewildering Take on the Meaning Of Life",
        content: `<p>In search of meaning, I go through this desert of meaninglessness. In search of meaning, I leave the pleasures of this hedonistic palm grove. I go far and wide in this search. I pass through cities; inhabited and abandoned. I pass through ruins, forests, and jungles.</p>
        <img src="/placeholder.svg?height=300&width=600" alt="Desert landscape" />
        <p>I cross mighty rivers of great thoughts with their beautiful greenery to search for my meaning. I climb high mountains of ever snow where no human thought can live and which are crossed by wanderers only with coats and sealskins of humility and awe. I cross all these paths in search of my meaning but where is it that I seek?</p>
        <p>Perhaps it is the sun rising and setting on me every day. Yet in the snow of these high mountains, the heat of the sun is very weak. In the forests and jungles, the sun barely shows its face in the day. In the rivers, I am too busy swimming. In the desert, its scorching heat is too intense for me to seek it. I need a moderate thought climate but it is nowhere to be found. What should I do?</p>
        <p>I seek the sun! Oh, I seek the sun! but woe on me that I can't seek it. My eyes are too weak to really see its bright face. My legs are too weak to travel with it on its journey. I am powerless in front of it. I am humbled by its greatness and yet I can't seek it. What should I do? What should I do?</p>
        <p>Wait! What do I do at night? Nothing. I sleep. Why not do something different? Okay, I will seek the sun in the night. (laughter) Are you going mad? Who seeks the sun in the night? I will be the first one to do so!</p>`,
        excerpt:
          "In search of meaning, I go through this desert of meaninglessness. In search of meaning, I leave the pleasures of this hedonistic palm grove. I go far and wide in this search. I pass through cities; inhabited ...",
        createdAt: "2m ago",
        updatedAt: "2m ago",
        category: "Recent",
      },
      {
        id: "2",
        title: "First meet up with George",
        content:
          "A more accurate description was the answers never surprised her. So, she asked for the 10,000th time, \"What's your favourite animal?\" But this time was different. When she heard the young boy's answer...",
        excerpt:
          "A more accurate description was the answers never surprised her. So, she asked for the 10,000th time, \"What's your favourite animal?\" But this time was different. When she heard the young boy's answer...",
        createdAt: "2h ago",
        updatedAt: "2h ago",
        category: "Recent",
      },
      {
        id: "3",
        title: "A general API helper programming language",
        content:
          "To better explain the project description I firstly need to tell the problem I have.",
        excerpt:
          "To better explain the project description I firstly need to tell the problem I have.",
        createdAt: "5mo ago",
        updatedAt: "5mo ago",
        category: "Older",
      },
      {
        id: "4",
        title: "From desktop",
        content: "Hello",
        excerpt: "Hello",
        createdAt: "5mo ago",
        updatedAt: "5mo ago",
        category: "Older",
      },
      {
        id: "5",
        title: "ASCASC",
        content: "Another of my notes",
        excerpt: "Another of my notes",
        createdAt: "10mo ago",
        updatedAt: "10mo ago",
        category: "Older",
      },
    ];

    setNotes(mockNotes);
    setSelectedNote(mockNotes[0]);
  }, []);

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
      {/* Sidebar */}
      <div
        className={cn(
          "border-r w-[200px] flex-shrink-0",
          !sidebarOpen && "hidden"
        )}
      >
        <div className="p-2 flex items-center justify-between border-b">
          <span className="font-semibold">Notes</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-40px)]">
          <div className="p-2 space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">📝</span>
                Notes
              </span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">📚</span>
                Notebooks
              </span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">⭐</span>
                Favorites
              </span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">#</span>
                Tags
              </span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">⏰</span>
                Reminders
              </span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">📊</span>
                Monographs
              </span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">🗑️</span>
                Trash
              </span>
            </Button>
            <Separator className="my-2" />
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">🔵</span>
                blue
              </span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">🟣</span>
                purple
              </span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span className="flex items-center">
                <span className="mr-2">🔴</span>
                red
              </span>
            </Button>
          </div>
        </ScrollArea>
      </div>

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
              <Search className="h-4 w-4" />
            </Button>
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
                  key={note.id}
                  className={cn(
                    "p-2 cursor-pointer hover:bg-muted/50 border-l-2",
                    selectedNote?.id === note.id
                      ? "border-l-green-500 bg-muted/50"
                      : "border-l-transparent"
                  )}
                  onClick={() => setSelectedNote(note)}
                >
                  <h3 className="font-medium text-sm">{note.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {note.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <span>{note.updatedAt}</span>
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
            {!sidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            )}
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
          <div className="flex items-center space-x-1">
            <select className="h-8 rounded-md border border-input px-2 text-xs">
              <option>Paragraph</option>
              <option>Heading 1</option>
              <option>Heading 2</option>
              <option>Heading 3</option>
            </select>
            <select className="h-8 rounded-md border border-input px-2 text-xs">
              <option>Sans-serif</option>
              <option>Serif</option>
              <option>Monospace</option>
            </select>
            <Button variant="ghost" size="icon">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Underline className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Strikethrough className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost" size="icon">
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <List className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ListOrdered className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Link2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Table className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              <Maximize2 className="h-4 w-4" />
            </Button>
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
