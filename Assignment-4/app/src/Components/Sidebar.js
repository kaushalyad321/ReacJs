import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Sidebar = ({ open, onClose }) => {
  const sections = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        {sections.map((section, index) => (
          <ListItem button key={index} component="a" href={section.path}>
            <ListItemText primary={section.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
