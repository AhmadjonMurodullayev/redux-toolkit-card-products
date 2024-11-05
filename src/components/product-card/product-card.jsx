import React from "react";
import formatter from "../../utils/currenscy-format";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducers/product-reducer";

export const ProductCard = (props) => {
  const dispatch = useDispatch();

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: 2,
        width: '100%',
        maxWidth: 300,
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={props.img}
        alt="img"
        sx={{ width: '100%', borderRadius: '8px 8px 0 0' }}
      />
      <Typography variant="h6" sx={{ fontSize: 25, marginTop: 1 }}>
        {props.title}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold', margin: 1 }}>
        {formatter(props.price)} sum
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
        {props.brand}
      </Typography>
      <Button
        onClick={() => dispatch(addCart(props))}
        fullWidth
        variant="contained"
        color="primary"
        sx={{ marginTop: 'auto' }}
      >
        Buy
      </Button>
    </Box>
  );
};
