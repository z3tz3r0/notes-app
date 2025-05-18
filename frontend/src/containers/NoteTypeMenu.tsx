import { Button } from "@/components/ui/button";
import React from "react";

interface NoteTypeMenuProps {
  emojiIcon: string;
  label: string;
}

const NoteTypeMenu: React.FC<NoteTypeMenuProps> = (props) => {
  const { emojiIcon, label } = props;
  return (
    <Button variant="ghost" className="w-full justify-start cursor-pointer">
      <span className="flex items-center">
        <span className="mr-2">{emojiIcon}</span>
        {label}
      </span>
    </Button>
  );
};

export default NoteTypeMenu;
