import type { IconButtonProps } from "@/components/IconButton";
import IconButton from "@/components/IconButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlignLeft,
  Bold,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Strikethrough,
  Table,
  Underline,
} from "lucide-react";
import React from "react";

interface TextToolBarProps {
  onFormatAction: (command: string) => void;
}

const buttons: (IconButtonProps & { command?: string })[] = [
  { Icon: Bold, command: "bold" },
  { Icon: Italic, command: "italic" },
  { Icon: Underline, command: "underline" },
  { Icon: Strikethrough, command: "strikeThrough" },
  { Icon: AlignLeft, command: "justifyLeft" },
  { Icon: List, command: "insertUnorderedList" },
  { Icon: ListOrdered, command: "insertOrderedList" },
  { Icon: Link2 }, // Link requires more complex handling, skip for now
  { Icon: ImageIcon }, // Image requires more complex handling, skip for now
  { Icon: Table }, // Table requires more complex handling, skip for now
];

const TextToolBar: React.FC<TextToolBarProps> = ({ onFormatAction }) => {
  return (
    <div className="flex items-center space-x-1">
      <Select defaultValue="p">
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="p">Paragraph</SelectItem>
          <SelectItem value="h1">Heading 1</SelectItem>
          <SelectItem value="h2">Heading 2</SelectItem>
          <SelectItem value="h3">Heading 3</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="sans-serif">
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sans-serif">Sans-serif</SelectItem>
          <SelectItem value="serif">Serif</SelectItem>
          <SelectItem value="mono">Monospace</SelectItem>
        </SelectContent>
      </Select>

      {/* Text editor button group */}
      {buttons.map((item, index) => (
        <IconButton
          key={index}
          Icon={item.Icon}
          onClick={() => item.command && onFormatAction(item.command)}
        />
      ))}
    </div>
  );
};

export default TextToolBar;
