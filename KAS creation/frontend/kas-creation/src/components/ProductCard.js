import { StarHalf } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: "950px", margin: "40px", padding: "3px" }}>
      <CardMedia
        sx={{ height: "200px",  width:"200px"}}
        // image="photos/plant.jpg"
        // name="green iguana"
        image={product.images}
        name={product.name}
      />
      <CardContent>
        <Typography fontWeight={500}>{product.name}</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize={25}> {product.price}</Typography>
          <Typography
            fontSize={25}
            sx={{
              background: "green",
              color: "whitesmoke",
              padding: "3px",
              borderRadius: "8px",
            }}
          >
            {product.ratings.average_rating} <StarHalf />
          </Typography>
        </Box>
      </CardContent>
      <CardActionArea></CardActionArea>
    </Card>
  );
}

export default ProductCard;
