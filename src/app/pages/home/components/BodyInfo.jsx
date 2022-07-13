import React from "react";
import { Grid } from "@mui/material";
import { Libros } from "./utils";
import BasicCard from "../../../components/card/Card";
import { isMobileOnly } from "react-device-detect";

const BodyInfo = () => {
  return (
    <Grid
      container
      mb={2}
      columnSpacing={3}
      rowSpacing={2}
      justifyContent={isMobileOnly ? "center" : "normal"}
    >
      {Libros &&
        Libros.map((libro) => {
          return (
            <React.Fragment key={libro.id}>
              <Grid item md={3} sm={12}>
                <BasicCard {...libro} />
              </Grid>
            </React.Fragment>
          );
        })}
    </Grid>
  );
};

export default BodyInfo;
