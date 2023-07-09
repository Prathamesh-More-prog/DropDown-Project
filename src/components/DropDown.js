import React, { useState } from "react";
import "../styles.css";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedItem ? selectedItem.label : "Select an option"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item.value} onClick={() => handleItemClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
