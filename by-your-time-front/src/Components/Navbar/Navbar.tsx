import { useState } from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CategoriesApi from "../Dropdown";
import { AppBar, Badge, Box, IconButton, List } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStore } from "react-redux";
import { useStoreContext } from "../../app/context/StoreContext";
import { useAppSelector } from "../../app/store/configureStore";
import SignInMenu from "../../app/layout/SignInMenu";

export default function Navbar(this: any) {
  const [isClicked, setIsClicked] = useState(false);
  const {basket} = useStoreContext();
  const itemCount = basket?.items.reduce((sum, item) => sum+item.quantity, 0)
  const {user} = useAppSelector(state => state.account);

  return (
    <>
      <nav className="navbar-container">
        <a href="/">
          <img src="/images/logoOk2.png" height="100px" alt="ByYourTime" />
        </a>
        <div className="events" onClick={() => setIsClicked(!isClicked)}>
          Events
          <ArrowDropDownIcon />
        </div>
        {isClicked && (
          <>
            <div className="dropdown">
              <CategoriesApi />
            </div>
          </>
        )}

        <a href="/blog">Blog</a>
        <a href="/newsletter">Newsletter</a>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <li>
            <IconButton href={`/basket`} size="large" sx={{ color: "inherit" }}>
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </li>
{user ? (
  <SignInMenu />
) : (<><li>
              <a href="/login" className="login">
                Login
              </a>
            </li>
            <ul> | </ul>
            <li>
                <a href="/register" className="register">
                  Register
                </a>
              </li></>)}
          
        </Box>
      </nav>
    </>
  );
}
