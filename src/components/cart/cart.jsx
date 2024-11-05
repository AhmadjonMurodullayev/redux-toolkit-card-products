import React from "react";
import { useSelector } from "react-redux";
import { SelectedProduct } from "../selected-product/selected-product";
import { nanoid } from "@reduxjs/toolkit";
import { Stack } from "@mui/material";

export const Cart = () => {
  const { product_list } = useSelector((state) => state.product);

  return (
    <Stack sx={{ height: "100vh" ,width:"400px", padding:"30px" }}>
      {product_list?.map((item) => {
        return <SelectedProduct key={nanoid()} {...item} />;
      })}
    </Stack>
  );
};
