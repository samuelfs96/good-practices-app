import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import useDialog from "../CustomDialog/hooks/useDialog";

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = () => {
  const {open, handleOpen} = useDialog();
  return (<>
    <CustomDialog open={open} onClose={() => handleOpen(false)}>
      <FavoriteTable/>
    </CustomDialog>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Test App
        </Typography>
        <IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleOpen(true)}>
            <FavoriteIcon />
          </IconButton>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Navbar;
