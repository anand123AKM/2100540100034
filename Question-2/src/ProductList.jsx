import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, CircularProgress } from "@mui/material";

const ProductList = ({ company, category, top, minPrice, maxPrice }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = "YLoQJB";
        const response = await axios.get(
          `http://20.244.56.144/test/companies/${company}/categories/${category}/products`,
          {
            params: {
              top: top,
              minPrice: minPrice,
              maxPrice: maxPrice,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [company, category, top, minPrice, maxPrice]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {products.map((product) => (
        <Typography key={product.id}>{product.name}</Typography>
      ))}
    </div>
  );
};

export default ProductList;
