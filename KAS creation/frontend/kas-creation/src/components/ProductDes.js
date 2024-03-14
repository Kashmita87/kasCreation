import { Grid, Container, Typography, Button } from "@mui/material";
import ProductList from "../util/ProductList";
// import ProductCard from "./ProductCard";
function ProductDes() {
  var product = ProductList[0];
  return (
    <Container maxWidth="md" style={{ marginTop: "10px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img src={product.images} height='100%' width='100%'/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Product Name
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            gutterBottom
          ></Typography>
          <Typography variant="body1" paragraph>
            This is a short description of the product. It highlights key
            features and benefits to the customer. Engage your audience with
            compelling copy that encourages them to take action.
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default ProductDes;
