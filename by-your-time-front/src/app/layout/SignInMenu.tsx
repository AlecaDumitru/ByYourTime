import { Button, Menu, Fade, MenuItem } from "@mui/material";
import React from "react";
import { clearBasket } from "../../features/basket/basketSlice";
import { signOut } from "../../Pages/Account/accountSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

export default function SignInMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.account);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="inherit"
        sx={{ typography: "h6", textTransform: "lowercase" }}
        onClick={handleClick}
      >
        {user?.email}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My orders</MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(signOut());
            // dispatch(clearBasket());
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
