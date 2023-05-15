import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import SearchBar from "../SearchBar";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useFilter } from "../../contexts/filter-context";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { state } = useFilter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const getProductsByColor = (products, colors) => {
    console.log(colors,'COLORSS')
    const filteredProducts = products.filter((product) =>
      colors.length === 0 || colors.includes(product.color)
    );
    return filteredProducts;
  };

  const getProductsByGender = (products, gender) => {
    console.log(gender,'What is coming')
    if (gender === "") {
      return products;
    } else {
      console.log('I am coming here')
      console.log(products)
      return products.filter((product) => product.gender === gender);
    }
  };

  const productsByColor = getProductsByColor(products, state.color);
  const productsByGender = getProductsByGender(products, state.gender);
  const filteredProducts = productsByColor
  .filter((product) => product.gender === state.gender || state.gender === "")
  .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));



  // console.clear();
  console.log("filteredProducts: ", filteredProducts);
  console.log("state.color: ", state.color);
  console.log("productsByColor: ", productsByColor);
  console.log("gender: ", productsByGender);

  return (
    <>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      {filteredProducts.length > 0 ? (
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "flex-start",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 200px)",
            flexDirection: "column",
          }}
        >
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, mb: 2 }} />
          <Typography variant="h6" align="center">
            No results found
          </Typography>
        </div>
      )}
    </>
  );
}

export default ProductList;