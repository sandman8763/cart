import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = ({ item, handleQuantityChange }) => {
  const { id, name, price, image, quantity, availableStock } = item;

  const handleIncreaseQuantity = () => {
    if (quantity < availableStock) {
      handleQuantityChange(id, quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      handleQuantityChange(id, quantity - 1);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <img src={image} alt={name} style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2" style={{ color: "gray" }}>
          ₹{price}
        </Typography>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
        >
          <IconButton aria-label="reduce" onClick={handleDecreaseQuantity}>
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography variant="subtitle1">{quantity}</Typography>
          <IconButton aria-label="increase" onClick={handleIncreaseQuantity}>
            <AddIcon fontSize="small" />
          </IconButton>
          <Typography variant="subtitle2" style={{ marginLeft: "8px" }}>
            Available Stock: {availableStock}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle2" align="right">
          ₹{(price * quantity).toFixed(2)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CartItem;
