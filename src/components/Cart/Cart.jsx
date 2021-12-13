import React, { useState } from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  console.log(cart.line_items);
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart
      <Link to="/" className={classes.link}>
        , start adding some
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} lg={3} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </div>
      </div>
      ;
    </>
  );
  console.log(cart.line_items.length);
  if (!cart.line_items) return "loading...";
  return (
    <div>
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} gutterBottom variant="h3">
          Your shopping cart
        </Typography>
        {cart.line_items.length === 0 ? <EmptyCart /> : <FilledCart />}
      </Container>
    </div>
  );
};
export default Cart;
