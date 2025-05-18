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

const buttons: IconButtonProps[] = [
  { Icon: Bold },
  { Icon: Italic },
  { Icon: Underline },
  { Icon: Strikethrough },
  { Icon: AlignLeft },
  { Icon: List },
  { Icon: ListOrdered },
  { Icon: Link2 },
  { Icon: ImageIcon },
  { Icon: Table },
];

const TextToolBar = () => {
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
        <IconButton key={index} Icon={item.Icon} />
      ))}
    </div>
  );
};

export default TextToolBar;
