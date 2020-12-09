import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "./global";
import Box from "@material-ui/core/Box";
import { addProduct } from "./slices/ProductSlice";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 15,
    marginBottom: 15,
  },
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 5,
    overflowY: "scroll",
    height: 400,
    "&::-webkit-scrollbar": {
      width: "0.2em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 10px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },

  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 5,
  },
});

export default function ProductCard() {
  const classes = useStyles();
  const products = useSelector((state: ProductItem[]) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Box className={classes.box}>
        <Typography variant="h6" noWrap>
          Our Products
        </Typography>
      </Box>
      <Box className={classes.main}>
        {products.map((item: any, id: number) => {
          return (
            <div key={id}>
              <Card className={classes.root} variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="350"
                    image={item.imageUrl}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(addProduct({ id: item.id }))}
                    disabled={item.added}
                  >
                    Add to Baskit
                  </Button>
                  <Typography
                    style={{ marginLeft: 100 }}
                    variant="h5"
                    color="textPrimary"
                    component="h2"
                  >
                    Rs.{item.price}/-
                  </Typography>
                </CardActions>
              </Card>
              <Divider variant="middle" />
            </div>
          );
        })}
      </Box>
    </div>
  );
}
