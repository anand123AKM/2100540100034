import React from "react";
import ProductList from "./ProductList";
import { CssBaseline, Container, Typography } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h2" gutterBottom>
          Top 10 Laptops on AMZ
        </Typography>
        <ProductList
          company="AMZ"
          category="Laptop"
          top={10}
          minPrice={1}
          maxPrice={10000}
        />
      </Container>
    </>
  );
};

export default App;
