export interface Note {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  category: string;
  isPinned: boolean;
  isPublic: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
