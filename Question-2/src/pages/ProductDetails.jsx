import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Typography,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,
          {
            headers: {
              Bearer: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTcyMDMxLCJpYXQiOjE3MjQxNzE3MzEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImVmNjgwODM1LTEzMTEtNDBlNi1hMDY2LTYyZDQ5NzRkMjgyOSIsInN1YiI6ImFuYW5kbWF1cnlhMTYxMEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJCQkROSVRNIiwiY2xpZW50SUQiOiJlZjY4MDgzNS0xMzExLTQwZTYtYTA2Ni02MmQ0OTc0ZDI4MjkiLCJjbGllbnRTZWNyZXQiOiJpa2hsblBuRVFlWElzbHFMIiwib3duZXJOYW1lIjoiQU5BTkQgS1VNQVIgTUFVUllBIiwib3duZXJFbWFpbCI6ImFuYW5kbWF1cnlhMTYxMEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwNTQwMTAwMDM0In0.8mGxqwcU51DuEv1zxxVXnwi4yyyL5s5x4_ZTeU7Cj9s`,
            },
          }
        );
        const product = response.data.find(
          (p) => `${p.company}-${p.name}-${p.index}` === id
        );
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
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
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {product.availability ? "In Stock" : "Out of Stock"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
