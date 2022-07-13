import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const TemporaryDrawer =({
  open,
  handleClose,
}) => {
  const history = useHistory();
  const toggleDrawer = useCallback(() => {
    handleClose();
  }, [handleClose]);

  const handleRedirect = useCallback(() => {
    history.push("./Movie");
  }, [history]);

  const render = useCallback(() => {
    return (
      <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          {[
            "Home",
             "Quienes somos",
          ].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton onClick={handleRedirect}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }, [toggleDrawer, handleRedirect]);

  return (
    <div>
      <React.Fragment key="left">
        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          {render()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default TemporaryDrawer;
