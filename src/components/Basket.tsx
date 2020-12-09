import React from "react";
import {
  Box,
  Paper,
  Typography,
  makeStyles,
  Divider,
  fade,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Button,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, increaseQty, decreaseQty } from "./slices/ProductSlice";
import { ProductItem } from "./global";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  caption: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quantity: {
    maxWidth: 80,
    marginRight: 40,
    padding: 5,
  },

  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  grow: {
    flexGrow: 1,
    padding: 15,
    maxWidth: 1085,
    height: 300,
    marginTop: 0,
  },

  root: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflowY: "scroll",
    height: 210,
    backgroundColor: theme.palette.background.paper,
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

  appbar: {
    backgroundImage: "linear-gradient(to right, #000046, #1cb5e0)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    color: "linear-gradient(to right, #000046, #1cb5e0)",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ProductBasket() {
  const products = useSelector((state: ProductItem[]) => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Paper className={classes.grow} elevation={5} variant="outlined">
        <div className={classes.caption}>
          <Typography className={classes.title} variant="h6" noWrap>
            Shopping Basket
          </Typography>
          <IconButton
            aria-label={`show${
              products.filter((addedItem) => addedItem.added).length
            }new mails`}
            color="inherit"
          >
            <Badge
              badgeContent={
                products.filter((addedItem) => addedItem.added).length
              }
              color="secondary"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>

        <ListItemText
          secondary={`You have ${
            products.filter((addedItem) => addedItem.added).length
          } items in the basket`}
        />
        <Divider />
        <List className={classes.root}>
          {products
            .filter((addedItem) => addedItem.added)
            .map((added: ProductItem) => (
              <React.Fragment key={added.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={added.title} src={added.imageUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={added.title}
                    secondary={added.description}
                  />
                </ListItem>
                <ListItem className={classes.list}>
                  <ListItemText>
                    <Typography variant="h6">{`Rs .${added.price}/-`}</Typography>
                  </ListItemText>
                  <div className={classes.quantity}>
                    <ButtonGroup>
                      <Button
                        variant="contained"
                        color="primary"
                        aria-label="contained primary button group"
                        onClick={() => dispatch(increaseQty({ id: added.id }))}
                      >
                        +
                      </Button>
                      <Button>{added.Qty}</Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        aria-label="contained primary button group"
                        onClick={() => dispatch(decreaseQty({ id: added.id }))}
                      >
                        -
                      </Button>
                    </ButtonGroup>
                  </div>

                  <IconButton
                    aria-label="delete"
                    onClick={() => dispatch(deleteProduct({ id: added.id }))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>

                <Divider />
              </React.Fragment>
            ))}
        </List>
      </Paper>
    </Box>
  );
}
