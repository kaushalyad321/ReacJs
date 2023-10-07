import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink, Routes, Route } from "react-router-dom";
import Inbox from "../Components/Inbox.js";
import Starred from "./Starred.js";
import SendEmail from "./SendEmail.js";
import Trash from "./Trash.js";
import Spam from "./Spam.js";
import Drafts from "./Drafts.js";
import AllMail from "./AllMail.js";

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <NavLink to={text}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <NavLink to={text}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <div  style={{display:'flex' ,justifyContent:'space-between'}}>
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <img
                src="/Icons/toggle.svg"
                style={{ width: "30px", cursor: "pointer" }}
              />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div> <NavLink to='/'> Home Page</NavLink> </div>
     
      <div >
        <Routes>
          
          <Route path="/Inbox" element={<Inbox />}></Route>
          <Route path="/Starred" element={<Starred />}></Route>
          <Route path="/Send email" element={<SendEmail />}></Route>
          <Route path="/Drafts" element={<Drafts />}></Route>
          <Route path="/All mail" element={<AllMail />}></Route>
          <Route path="/Trash" element={<Trash />}></Route>
          <Route path="/Spam" element={<Spam />}></Route>
        </Routes>
      </div>
    </div>
  );
}
