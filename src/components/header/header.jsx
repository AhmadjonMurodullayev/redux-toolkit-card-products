import { IconButton, Badge, Drawer, Button, Stack } from "@mui/material";
import { CartIcon } from "../../assets/cart-icon";
import { Cart } from "../cart/cart";
import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const [showP, setShowP] = React.useState(false);
  const { count } = useSelector((state) => state.product);

  return (
    <Stack sx={{ display: "flex", justifyContent: "space-between" , backgroundColor:"blue", padding:"10px"}} >
      <Drawer onClose={() => setShowP(false)} open={showP} anchor="left">
        <Button onClick={() => setShowP(false)} sx={{ marginLeft: "auto",fontSize:"30px" }}>X</Button>
        <Cart />
      </Drawer>
      <Stack sx={{maxWidth:"1200px", margin:"auto"}} >
        <IconButton onClick={() => setShowP(true)} aria-label="cart">
          <Badge badgeContent={count ? count : "0"} color="error">
            <CartIcon />
          </Badge>
        </IconButton>
      </Stack>
    </Stack>
  );
};
