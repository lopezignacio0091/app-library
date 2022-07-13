import React from "react";
import { Grid } from "@mui/material";
import FormBook from "./components/FormBook";
const Book = () => {
  return (
    <Grid justifyContent="center" style={{ display: "flex", padding: "30px" }}>
      <FormBook />
    </Grid>
  );
};

export default Book;
