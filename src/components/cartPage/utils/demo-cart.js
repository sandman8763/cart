import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    cartItems,
    totalValue,
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
  } = useContext(CartContext);

  const handleContinueShopping = () => {
    // replace the URL with your landing page URL
    return <Link to="/" />;
  };

  // Calculate subtotal value
  const subtotal = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <Typography variant="h4" style={{ marginBottom: "16px" }}>
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" style={{ marginBottom: "16px" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="h6">Product</Typography>
                <Typography variant="h6">Total</Typography>
              </div>
              {cartItems.map((item) => (
                <CartItem
                  item={item}
                  handleQuantityChange={updateCartItemQuantity}
                  key={item.id}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="h6">Subtotal</Typography>
                <Typography variant="h6">₹{subtotal.toFixed(2)}</Typography>
              </div>
              <Button
                variant="outlined"
                size="large"
                onClick={handleContinueShopping}
                startIcon={<AddIcon />}
                style={{ marginBottom: "16px" }}
              >
                Continue Shopping
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Cart;
