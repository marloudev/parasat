import React, { useState } from "react";
import Button from "../_components/button"

const Collapse = ({ title, children, variant = "default" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="shadow-sm">
      {/* Header */}
      <div>
        <Button
          variant={variant}
          onClick={toggleCollapse}
          className="w-full flex items-center justify-between"
        >
          <span>{title}</span>
          <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
            ▼
          </span>
        </Button>
      </div>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen border border-gray-300 rounded-md" : "max-h-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
