import React from "react";
import AppBarWithSearch from "./components/appbar";
import ProductCard from "./components/Products";
import ProductBasket from "./components/Basket";
import LabelBottomNavigation from './components/bottom_navigation';
import { store } from "./components/store/store";
import { Provider } from "react-redux";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Provider store={store}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <AppBarWithSearch />
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <ProductCard />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <ProductBasket />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <LabelBottomNavigation/>
          </Grid>
        </Grid>


      </Grid>
    </Provider>
  );
}

export default App;
