import React from "react";
import { ProductCard } from "./components/product-card/product-card";
import { products } from "./data/products";
import { Header } from "./components/header/header";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {products.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <ProductCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
