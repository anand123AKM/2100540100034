import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,
          {
            headers: {
              Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTY5ODk0LCJpYXQiOjE3MjQxNjk1OTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImVmNjgwODM1LTEzMTEtNDBlNi1hMDY2LTYyZDQ5NzRkMjgyOSIsInN1YiI6ImFuYW5kbWF1cnlhMTYxMEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJCQkROSVRNIiwiY2xpZW50SUQiOiJlZjY4MDgzNS0xMzExLTQwZTYtYTA2Ni02MmQ0OTc0ZDI4MjkiLCJjbGllbnRTZWNyZXQiOiJpa2hsblBuRVFlWElzbHFMIiwib3duZXJOYW1lIjoiQU5BTkQgS1VNQVIgTUFVUllBIiwib3duZXJFbWFpbCI6ImFuYW5kbWF1cnlhMTYxMEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwNTQwMTAwMDM0In0.brgLMC-K6kSzKjTYUPx99YGY4wyBfhOc1FS_U8DANTM`,
            },
          }
        );
        const productsWithId = response.data.map((product, index) => ({
          ...product,
          id: `${product.company}-${product.name}-${index}`,
        }));
        setProducts(productsWithId);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={`https://source.unsplash.com/random?product,${product.id}`}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.company} - {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllProducts;
