import type { LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export interface IconButtonProps {
  Icon: LucideIcon;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { onClick, Icon } = props;
  return (
    <Button variant="ghost" size="icon" onClick={onClick}>
      <Icon className="h-4 w-4" />
    </Button>
  );
};

export default IconButton;
