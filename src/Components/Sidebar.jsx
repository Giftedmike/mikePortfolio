import React from "react";
import "./Sidebar.css"; // Make sure this file exists

const Sidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="#home" rel="noopener noreferrer" className="social youtube">
        <i className="fas fa-home"></i>
        
      </a>
      <a href="#work" rel="noopener noreferrer" className="social facebook">
        <i className="fas fa-briefcase"></i>
      </a>
      <a href="#tools" rel="noopener noreferrer" className="social instagram">
        <i className="fas fa-tools"></i>
      </a>
      <a href="#contact" rel="noopener noreferrer" className="social twitter">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

export default Sidebar;
