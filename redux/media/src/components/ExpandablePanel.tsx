import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

type ExpandablePanelProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const ExpandablePanel = ({ header, children }: ExpandablePanelProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex items-center justify-between">{header}</div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
